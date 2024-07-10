import { FC, useState } from "react";
import { Users } from "../components/users/component";
import { RegistrationForm } from "../components/registration-form/component";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticationModule } from "../redux/ui/authentication/selectors";
import { clear } from "../redux/ui/authentication";
import classNames from "classnames";

export const MainPage: FC = () => {
  const disp = useDispatch();

  const [registered, setRegistered] = useState(false);

  const account = useSelector(selectAuthenticationModule);

  if (!Object.keys(account).length) {
    return <RegistrationForm onSave = {() => setRegistered(true)} />
  } else {
    return (
      <div className = {classNames("page")}>
        <div className = {classNames("top")}>
          <div className = {classNames("container")}>
            <button
              className = {classNames("btn", "btn--small", "btn--right", "btn--icon")}
              onClick = {() => disp(clear())}
            >
              <span className = {classNames("escape-text")}>Выход</span>
              <svg className = {classNames("escape-icon")} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"/>
              </svg>
            </button>
            <div className = {classNames("top__content")}>
              <h2 className = {classNames("top__title", "margin-reset")}>
                Наша команда
              </h2>
              <p className = {classNames("top__text", "margin-reset")}>
                Это опытные специалисты, хорошо разбирающиеся во&nbsp;всех задачах,
                которые ложатся на&nbsp;их&nbsp;плечи, и&nbsp;умеющие находить выход из&nbsp;любых,
                даже самых сложных ситуаций.
              </p>
            </div>
          </div>
        </div>
        <Users />
        <button className = {classNames("btn", "btn--with-arrow")}>
          <span>Показать ещё</span>
          <svg className = {classNames("btn__arrow")} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.497 7.98903L12 15.297L4.50299 7.98903C4.36905 7.85819 4.18923 7.78495 4.00199 7.78495C3.81475 7.78495 3.63494 7.85819 3.50099 7.98903C3.43614 8.05257 3.38461 8.12842 3.34944 8.21213C3.31426 8.29584 3.29614 8.38573 3.29614 8.47653C3.29614 8.56733 3.31426 8.65721 3.34944 8.74092C3.38461 8.82463 3.43614 8.90048 3.50099 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.365 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z"/>
          </svg>
        </button>
      </div>
    );
  }
};
