import { FC, useCallback, Reducer, useReducer, useEffect } from "react";
import { useRegisterNewUserMutation } from "../../redux/service/api";
import { useDispatch } from "react-redux";
import { addId, addToken } from "../../redux/ui/authentication";
import { FormValue } from "../../types";
import { Action } from "../../types";
import styles from "./styles.module.css";
import classNames from "classnames";

const defaultFormValue: FormValue = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

type RegFormProps = {
  onSave: () => void,
};

const reducer: Reducer<FormValue, Action> = (state, { type, payload }): FormValue => {
  switch (type) {
    case "setName":
      return {...state, name: payload};
    case "setEmail":
      return {...state, email: payload};
    case "setPassword":
      return {...state, password: payload};
    case "setPasswordConfirm":
      return {...state, passwordConfirm: payload};
    case "cleanForm":
      return {...defaultFormValue};
    default:
      return state;
  }
}

const visibleChange = (event) => {
  const stick = event.target.closest("button").querySelectorAll("path")[1];
  const input = event.target.closest("div").querySelector("input");
  if (stick.style.display === "none") {
    stick.style.display = "block";
    input.type = "password";
  } else {
    stick.style.display = "none";
    input.type = "text";
  }
};

export const RegistrationForm: FC<RegFormProps> = ({ onSave }) => {
  const disp = useDispatch();

  const [form, dispatch] = useReducer(reducer, defaultFormValue);

  useEffect(() => {
    if (document.getElementById("password") && document.getElementById("passwordConfirm")) {
      const password: string = document.getElementById("password").value;
      const passwordConfirm: string = document.getElementById("passwordConfirm").value;
      if (password.length >= 8 && passwordConfirm.length >= 8 && password !== passwordConfirm) {
        alert("Пароли не совпадают");
      } else {
        return;
      }
    } else {
      return;
    }
  });

  const [registerNewUser, { isLoading }] = useRegisterNewUserMutation();

  let response;

  const handleSave = useCallback(async (form: FormValue) => {
    response = await registerNewUser({
      newUser: {...form}
    });
    return response.data;
  }, [registerNewUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div  className = {classNames(styles.container)}>
      <form
        className = {classNames(styles.form)}
        onSubmit = {(event) => event.preventDefault()}
      >
        <fieldset className = {classNames(styles.form__fieldset)}>
          <legend className = {classNames(styles.form__legend)}>
            Регистрация
          </legend>
          <div className = {classNames(styles.form__wrapper)}>
            <div className = {classNames(styles.form__part)}>
              <p className = {classNames(styles.form__title)}>
                Имя
              </p>
              <input
                className = {classNames(styles.form__input)}
                type="text"
                name="text"
                placeholder="Иван"
                pattern="[A-Za-zА-Яа-яЁё]{1,25}"
                spellCheck="false"
                required
                value={form.name}
                onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
              />
              <span className = {classNames(styles.form__error)}>Ошибка</span>
            </div>
            <div className = {classNames(styles.form__part)}>
              <p className = {classNames(styles.form__title)}>
                Электронная почта
              </p>
              <input
                className = {classNames(styles.form__input)}
                type="email"
                name="email"
                placeholder="example@mail.ru"
                spellCheck="false"
                required
                value={form.email}
                onChange={(event) => dispatch({ type: "setEmail", payload: event.target.value })}
              />
              <span className = {classNames(styles.form__error)}>Ошибка</span>
            </div>
            <div className = {classNames(styles.form__part)}>
              <p className = {classNames(styles.form__title)}>
                Пароль
              </p>
              <input
                className = {classNames(styles.form__input)}
                id="password"
                type="password"
                name="password"
                placeholder="Не менее 8 символов"
                pattern="^\S{6,}$"
                minLength={8}
                required
                value={form.password}
                onChange={(event) => dispatch({ type: "setPassword", payload: event.target.value })}
              />
              <button
                className = {classNames(styles.form__visible)}
                onClick = {visibleChange}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_233_221)">
                    <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 4L20 20" stroke="#808185" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_233_221">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span className = {classNames(styles.form__error)}>Ошибка</span>
            </div>
            <div className = {classNames(styles.form__part)}>
              <p className = {classNames(styles.form__title)}>
                Подтвердите пароль
              </p>
              <input
                className = {classNames(styles.form__input)}
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                placeholder="Не менее 8 символов"
                pattern="^\S{6,}$"
                minLength={8}
                required
                value={form.passwordConfirm}
                onChange={(event) => dispatch({ type: "setPasswordConfirm", payload: event.target.value })}
              />
              <button
                className = {classNames(styles.form__visible)}
                onClick = {visibleChange}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_233_221)">
                    <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 4L20 20" stroke="#808185" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_233_221">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span className = {classNames(styles.form__error)}>Ошибка</span>
            </div>
          </div>
          <button
            className = {classNames(styles.form__button)}
            onClick = {() => {
              handleSave({...form}).then((result) => {
                disp(addId(result.id));
                disp(addToken(result.token));
                onSave();
              });
              dispatch({ type: "cleanForm", payload: "" });
              }
            }
          >
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
    </div>
  );
};
