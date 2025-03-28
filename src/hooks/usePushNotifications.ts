"use client";
import $api from "@api";
import { useEffect } from "react";

const publicVapidKey = process.env.NEXT_PUBLIC_PUBLIC_VAPID_KEY;

export const usePushNotifications = () => {
  useEffect(() => {
    const registerPush = async () => {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        try {
          const registration = await navigator.serviceWorker.ready;
          console.log("Service Worker is ready:", registration);

          const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicVapidKey,
          });
          await $api.post("/subscribe", { subscription });
        } catch (error) {
          console.error("Error during push subscription:", error);
        }
      } else {
        console.log("Service Worker or PushManager not supported.");
      }
    };

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        registerPush();
      }
    });
  }, []);
};

 