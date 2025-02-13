import { AtSign, KeyRound, User } from "lucide-react";
import { IconComponentProps } from "../components/icon";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { AuthType } from "../provider/context";

interface IInputField {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  autoComplete: HTMLInputAutoCompleteAttribute;
  icon: React.ComponentType<IconComponentProps>;
  authType: AuthType[];
}

export const inputFields: IInputField[] = [
  {
    type: "text",
    placeholder: "Название компании",
    name: "name",
    autoComplete: "organization",
    icon: User,
    authType: ["registerCompany"],
  },
  {
    type: "text",
    placeholder: "Имя",
    name: "name",
    autoComplete: "cc-given-name",
    icon: User,
    authType: ["register"],
  },
  {
    type: "email",
    placeholder: "E-mail",
    name: "email",
    autoComplete: "email",
    icon: AtSign,
    authType: ["login", "register", "registerCompany"],
  },
  {
    type: "password",
    placeholder: "Пароль",
    name: "password",
    autoComplete: "current-password",
    icon: KeyRound,
    authType: ["login", "register", "registerCompany"],
  },
];
export const authTexts = {
  login: {
    title: "Войти в аккаунт",
    description: "Введите логин и пароль для доступа к вашему аккаунту",
    button: "Войти",
    hasAccountText: "Еще нет аккаунта?",
    hasAccountButton: "Зарегистрироваться",
    companyAuthLink: "",
  },
  register: {
    title: "Регистрация",
    description:
      "Создайте новый аккаунт для доступа ко всем возможностям сервиса",
    button: "Зарегистрироваться",
    hasAccountText: "Уже есть аккаунт?",
    hasAccountButton: "Войти",
    companyAuthLink: "Зарегистрироваться как продавец",
  },
  registerCompany: {
    title: "Регистрация продавца",
    description:
      "Создайте новый аккаунт для доступа ко всем возможностям сервиса",
    button: "Зарегистрироваться",
    hasAccountText: "Уже есть аккаунт?",
    hasAccountButton: "Войти",
    companyAuthLink: "Зарегистрироваться как покупатель",
  },
};
