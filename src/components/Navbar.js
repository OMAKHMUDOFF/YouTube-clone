export function Nav() {
  return (
    <>
      <nav>
        <div className="logo-menu">
          <div className="menu">
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="icon-name">
            <i
              className="fa-brands fa-youtube"
              style={{ color: "#ff0000" }}
            ></i>
            <h3>YouTube</h3>
          </div>
        </div>
        <div className="search-input">
          <div className="searchWin">
            <div className="input-keyboard">
              <input type="search" placeholder="Введите запрос" />
              <i className="fa-regular fa-keyboard"></i>
            </div>
            <div className="button-glass">
              <button title="Введите запрос">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="microphone">
            <button title="Голосовой поиск">
              <i className="fa-solid fa-microphone"></i>
            </button>
          </div>
        </div>
        <div className="setting-profile">
          <div className="hover-setting">
            <button title="Настройки">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="profile">
            <button>
              <i className="fa-solid fa-user"></i>
              Войти
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
