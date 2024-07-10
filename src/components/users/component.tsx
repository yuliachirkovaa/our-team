import { FC } from "react";
import { User } from "../../types";
import { UserCard } from "../user-card/component";
import { useGetUsersQuery } from "../../redux/service/api";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Users: FC = () => {
  const { data: users, isLoading } = useGetUsersQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!users) {
    return;
  }

  return (
    <div className = {classNames(styles.container)}>
      <ul className = {classNames(styles.users)}>
        {users?.data.length &&
          users.data.map((user: User) => (
            <UserCard
              id = {user.id}
              avatar = {user.avatar}
              firstName = {user.first_name}
              lastName = {user.last_name}
            />
          ))}
      </ul>
    </div>
  );
};
