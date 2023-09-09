import { NavLink } from "react-router-dom";

export function History({ history, setvid }) {
  return (
    <>
      <div className="historyIN">
        <div className="title">
          <h4>История просмотра</h4>
        </div>

        <div className="when">
          <h4>Сегодня</h4>
        </div>

        <div className="historyCards">
          {history.map((el, i) => {
            return (
              <div className="historyCard" key={i}>
                <NavLink
                  to={"/iframe"}
                  onClick={() => {
                    setvid(el);
                  }}
                >
                  <div className="preview">
                    <img src={el.img} alt="history video preview" />
                  </div>
                  <div className="history-title">
                    <p>{el?.title}</p>
                    <div className="history-views">
                      <p>{el.author}</p> • <p>{el.views}тыс. просмотров</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
