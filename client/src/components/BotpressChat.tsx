import { useEffect } from "react";

declare global {
  interface Window {
    botpress: any;
  }
}

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
    script.async = true;

    script.onload = () => {
      if (window.botpress) {
        window.botpress.init({
          botId: "ae9965f2-0930-47c0-9f82-addd9ee197c4",
          clientId: "0c1c9e09-a7ab-479f-a3ad-8e0687946e18",
          selector: "#webchat",
          configuration: {
            version: "v2",
            botName: "ZenX Assistant",
            themeMode: "dark",
            fontFamily: "inter",
            color: "#715ab0",
            radius: 2,
            feedbackEnabled: false,
            soundEnabled: false,
            footer: "",
            proactiveMessageEnabled: false
          }
        });

        setTimeout(() => {
          if (window.botpress && typeof window.botpress.open === "function") {
            window.botpress.open();
          }
        }, 1000);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="webchat"
      className="w-full h-full"
      style={{
        width: "100%",
        height: "100%"
      }}
    />
  );
}
