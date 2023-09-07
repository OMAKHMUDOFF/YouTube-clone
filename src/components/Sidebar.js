import { NavLink } from "react-router-dom";
import shorts from "../img/YouTube_Shorts.png";
import subs from "../img/menu_youtube_social.png";
import lib from "../img/library.webp";
import history from "../img/history.png";

import trending from "../img/trending-icon.jpg";
import music from "../img/musical-note-outline.svg";
import live from "../img/live-icon.jpg";
import gaming from "../img/gaming.webp";
import bulb from "../img/bulb-outline.svg";
import fashion from "../img/fashion.png";

import circleplus from "../img/add-circle-outline.svg";
import kids from "../img/youtube-kds.png";
export function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="links">
          <ul>
            <li>
              <NavLink to={"/"}>
                <i class="fa-solid fa-house"></i>Главная
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shorts"}>
                <img src={shorts} className="shorts" alt="shorts" /> Shorts
              </NavLink>
            </li>
            <li>
              <NavLink to={"/subscribes"}>
                <img src={subs} className="subs" alt="" /> Подписки
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/library"}>
                <img src={lib} className="lib" alt="" />
                Библиотека
              </NavLink>
            </li>
            <li>
              <NavLink to={"/history"}>
                <img src={history} className="history" alt="" />
                История
              </NavLink>
            </li>
          </ul>
          <div className="sign-in">
            <div className="subtitle">
              <p>
                Вы сможете ставить отметки "Нравится", писать комментарии и
                подписываться на каналы
              </p>
            </div>
            <div className="sign-btn">
              <div className="profile">
                <button>
                  <i className="fa-solid fa-user"></i>
                  Войти
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navigators">
          <div className="title">
            <p>Навигатор</p>
          </div>
          <ul>
            <li>
              <NavLink to={"/trending"}>
                <img src={trending} alt="trending icon" />В тренде
              </NavLink>
            </li>
            <li>
              <NavLink to={"/music"}>
                <img src={music} alt="musics icon" />
                Музыка
              </NavLink>
            </li>
            <li>
              <NavLink to={"/live"}>
                <img src={live} alt="" />
                Трансляция
              </NavLink>
            </li>
            <li>
              <NavLink to={"/gaming"}>
                <img src={gaming} alt="gaming icon" />
                Видеоигры
              </NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>
                <i class="fa-regular fa-newspaper"></i>Новости
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sport"}>
                <i class="fa-solid fa-trophy"></i>
                Спорт
              </NavLink>
            </li>
            <li>
              <NavLink to={"/educate"}>
                <img src={bulb} alt="bulb icon" />
                Обучение
              </NavLink>
            </li>
            <li>
              <NavLink to={"/fashion"}>
                <img src={fashion} alt="fashion icon" />
                Мода и красота
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/catalog"}>
                <img src={circleplus} alt="catalog" />
                Каталог каналов
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="others">
          <div className="title">Другие возможности</div>
          <ul>
            <li>
              <NavLink to={"/kids"}>
                <img src={kids} alt="youtube kids icon" className="kids" />
                YouTube Детям
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/settings"}>
                <i class="fa-solid fa-gear"></i>
                Настройки
              </NavLink>
            </li>
            <li>
              <NavLink to={"/laments"}>
                <i class="fa-regular fa-flag"></i>
                Жалобы
              </NavLink>
            </li>
            <li>
              <NavLink to={"/ref"}>
                <i class="fa-regular fa-circle-question"></i>Справка
              </NavLink>
            </li>
            <li>
              <NavLink to={"/recall"}>
                <i class="fa-solid fa-triangle-exclamation"></i>Отправить отзыв
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
