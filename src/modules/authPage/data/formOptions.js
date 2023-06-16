export const login = [
  {
    type: "text",
    name: "email",
    label: "Email",
    id: "outlined-adornment-email",
  },
  {
    mustTypeChanges: true,
    type: { false: "password", true: "text" },
    name: "password",
    label: "Password",
    id: "outlined-adornment-password",
  },
];

export const loginState = {
  email: "",
  password: "",
};

export const password = [
  {
    type: "text",
    name: "email",
    label: "Email",
    id: "outlined-adornment-email",
  },
  {
    mustTypeChanges: true,
    type: { false: "password", true: "text" },
    name: "password",
    label: "Password",
    id: "outlined-adornment-password",
  },
];

export const passwordState = {
  email: "",
  password: "",
};
