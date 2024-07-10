import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

type UserCardProps = {
  id: number,
  avatar: string,
  firstName: string,
  lastName: string,
};

const likeUser = (event) => {
  const heart = event.target.closest("button").querySelector("path");
  if (heart.style.fill === "rgb(81, 38, 137)") {
    heart.style.fill = "transparent";
    heart.style.stroke = "#151317";
  } else {
    heart.style.fill = "#512689";
    heart.style.stroke = "#512689";
  }
};

export const UserCard: FC<UserCardProps> = ({ id, avatar, firstName, lastName }) => {
  return (
    <div className = {classNames(styles.wrapper)}>
      <Link to = {`/${id}`}>
        <li
          className = {classNames(styles.card)}
          key = {id}
        >
          <div className = {classNames(styles.user)}>
            <img
              className = {classNames(styles.user__avatar)}
              src = {avatar}
              alt={`${firstName}&nbsp;${lastName}`}
            />
            <p className = {classNames(styles.user__name)}>
              <span>{firstName}</span>&nbsp;<span>{lastName}</span>
            </p>
          </div>
        </li>
      </Link>
      <button
        className = {classNames(styles.like)}
        onClick = {likeUser}
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path className = {classNames(styles.like__heart)} d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
