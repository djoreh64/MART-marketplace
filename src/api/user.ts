import $api from "@api";

const User = {
  async login(form: HTMLFormElement) {
    const data = new FormData(form);
    const res = await $api.post("/users/login", Object.fromEntries(data));
    if (res.status !== 200) throw new Error("Неверный логин или пароль");
    return res.data;
  },

  async subscribe() {
    const res = await $api.get("/subscribe");
    if (res.status !== 200) throw new Error("Ошибка подписки");
    return res.data;
  },

  async me() {
    const res = await $api.get("/users/me");
    if (res.status !== 200) throw new Error("Ошибка выхода из системы");
    return res.data;
  },

  async register(form: HTMLFormElement) {
    const data = new FormData(form);
    const res = await $api.post("/users/register", Object.fromEntries(data));
    if (res.status !== 200) throw new Error("Некорретные данные");
    return res.data;
  },
};

export default User;
