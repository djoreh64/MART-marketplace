"use client";
import { useEffect } from "react";

const publicVapidKey = process.env.NEXT_PUBLIC_PUBLIC_VAPID_KEY;

export const usePushNotifications = () => {
  useEffect(() => {
    const registerPush = async () => {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: publicVapidKey,
        });

        await fetch("/api/subscribe", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    };

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        registerPush();
      }
    });
  }, []);
};
