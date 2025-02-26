self.addEventListener("push", (event) => {
  const data = event.data?.json();
  const title = data?.title || "Новое уведомление";
  const options = {
    body: data?.body || "Вы получили новое уведомление!",
    icon: "/icon192x192.png",
    badge: "/icon192x192.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://djoreh64.ru") 
  );
});
