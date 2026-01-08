import express, { type Request, type Response, type NextFunction } from "express";
import { createServer } from "http";
import "dotenv/config";

// ✅ Correct ESM-safe imports
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./static.js";

const app = express();
const httpServer = createServer(app);

/* ---------- RAW BODY SUPPORT ---------- */
declare module "http" {
  interface IncomingMessage {
    rawBody?: unknown;
  }
}

/* ---------- MIDDLEWARE ---------- */
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

/* ---------- LOGGER ---------- */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/* ---------- API LOGGING ---------- */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, unknown> | undefined;

  const originalJson = res.json.bind(res);
  res.json = (body, ...args) => {
    capturedJsonResponse = body;
    return originalJson(body, ...args);
  };

  res.on("finish", () => {
    if (!path.startsWith("/api")) return;

    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;

    if (capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    log(logLine);
  });

  next();
});

/* ---------- BOOTSTRAP ---------- */
(async () => {
  await registerRoutes(httpServer, app);

  // Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    res.status(status).json({
      message: err.message || "Internal Server Error",
    });
  });

  // Production vs Dev
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite.js");
    await setupVite(httpServer, app);
  }

  const port = Number(process.env.PORT) || 5000;
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => log(`serving on port ${port}`),
  );
})();
