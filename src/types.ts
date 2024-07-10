export type User = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
};

export type FormValue = {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
};

export type Action = {
  type: string,
  payload: string,
};
