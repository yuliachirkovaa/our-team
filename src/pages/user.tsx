import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../redux/service/api";
import { User } from "../types";
import { clear } from "../redux/ui/authentication";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export const UserPage: FC = () => {
  const disp = useDispatch();
  const { userId } = useParams();
  const userIdNum = Number(userId);

  const { data: users, isLoading } = useGetUsersQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!users) {
    return;
  }

  const { email, first_name, last_name, avatar, } = users.data.find(({ id }: User) => id === userIdNum);

  return (
    <div className = {classNames("page")}>
      <div className = {classNames("top")}>
        <div className = {classNames("container", "container--userpage")}>
          <button className = {classNames("btn", "btn--small", "btn--back", "btn--icon")}>
            <Link to = {"/"}>
              <span className = {classNames("back-text")}>Назад</span>
              <svg className = {classNames("back-icon")} width="7" height="14" viewBox="0 0 7 14" fill="none">
                <path d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z"/>
              </svg>
            </Link>
          </button>
          <div className = {classNames("top__user")}>
            <img
              className = {classNames("top__avatar")}
              src={avatar}
              alt={`${first_name}&nbsp;${last_name}`}
            />
            <div className = {classNames("top__content", "top__content--userpage")}>
              <h2 className = {classNames("top__title", "top__title--userpage", "margin-reset")}>
                <span>{first_name}</span>&nbsp;<span>{last_name}</span>
              </h2>
              <p className = {classNames("top__text", "top__text--userpage", "margin-reset")}>
                Партнёр
              </p>
            </div>
          </div>
          <button
            className = {classNames("btn", "btn--small", "btn--icon")}
            onClick = {() => disp(clear())}
          >
            <Link to = {"/"}>
              <span className = {classNames("escape-text")}>Выход</span>
              <svg className = {classNames("escape-icon")} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"/>
              </svg>
            </Link>
          </button>
        </div>
      </div>
      <div className = {classNames("container", "container--info")}>
        <div className = {classNames("descr")}>
          <p className = {classNames("margin-reset")}>
            Клиенты видят в&nbsp;нем эксперта по&nbsp;вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура,
            процессы, аналитика и&nbsp;ИТ-компоненты. Он&nbsp;помогает клиентам лучше понимать структуру рисков их&nbsp;бизнеса, улучшать процессы за&nbsp;счет применения
            новейших технологий и&nbsp;увеличивать продажи, используя самые современные аналитические инструменты.
          </p>
          <p className = {classNames("margin-reset")}>
            В&nbsp;работе с&nbsp;клиентами недостаточно просто решить конкретную проблему или помочь справиться с&nbsp;трудностями. Не&nbsp;менее важно уделять внимание обмену знаниями:
            &laquo;Один из&nbsp;самых позитивных моментов&nbsp;&mdash;это осознание того, что ты&nbsp;помог клиенту перейти на&nbsp;совершенно новый уровень компетентности, уверенность
            в&nbsp;том, что после окончания проекта у&nbsp;клиента есть все необходимое, чтобы дальше развиваться самостоятельно&raquo;.
          </p>
          <p className = {classNames("margin-reset")}>
            Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он&nbsp;является совладельцем сети клиник
            эстетической медицины в&nbsp;Швейцарии, предлагающей инновационный подход к&nbsp;красоте, а&nbsp;также инвестором других бизнес-проектов.
          </p>
        </div>
        <div className = {classNames("contacts")}>
          <a
            className = {classNames("contacts__link")}
            href="tel:+7954333445"
            aria-label="Позвонить пользователю"
          >
            <div className = {classNames("contacts__icon")}>
              <svg className = {classNames("contacts__tel")} width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M9.55399 5.24003L6.17099 1.33503C5.78099 0.88503 5.06599 0.88703 4.61299 1.34103L1.83099 4.12803C1.00299 4.95703 0.765988 6.18803 1.24499 7.17503C4.10661 13.1 8.88503 17.8851 14.806 20.755C15.792 21.234 17.022 20.997 17.85 20.168L20.658 17.355C21.113 16.9 21.114 16.181 20.66 15.791L16.74 12.426C16.33 12.074 15.693 12.12 15.282 12.532L13.918 13.898C13.8482 13.9712 13.7562 14.0195 13.6563 14.0354C13.5564 14.0513 13.4541 14.0339 13.365 13.986C11.1354 12.7021 9.28598 10.8503 8.00499 8.61903C7.95702 8.52978 7.93964 8.42726 7.95554 8.32719C7.97144 8.22711 8.01972 8.13502 8.09299 8.06503L9.45299 6.70403C9.86499 6.29003 9.90999 5.65003 9.55399 5.23903V5.24003Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span>+7 (954) 333-44-55</span>
          </a>
          <a
            className = {classNames("contacts__link")}
            href={`mailto:${email}`}
            aria-label="Написать пользователю"
          >
            <div className = {classNames("contacts__icon")}>
              <svg className = {classNames("contacts__email")} width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM18.35 2L11 7.085L3.65 2H18.35ZM2 14V2.6825L10.5725 8.615C10.698 8.7021 10.8472 8.74877 11 8.74877C11.1528 8.74877 11.302 8.7021 11.4275 8.615L20 2.6825V14H2Z"/>
              </svg>
            </div>
            <span>{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
