"use client";

import { useEffect, useState } from "react";

export const usePushNotifications = () => {
  const [permission, setPermission] = useState("default");

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications.");
      return;
    }

    const permission = await Notification.requestPermission();
    setPermission(permission);

    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return { permission };
};