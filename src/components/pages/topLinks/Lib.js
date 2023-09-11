import { NavLink } from "react-router-dom";
import historyin from "../../../img/history.png";

export function Lib({ history, setvid }) {
  return (
    <>
      <div className="libIN">
        <div className="title">
          <img src={historyin} alt="" />
          <h4>История</h4>
        </div>

        <div className="libCards">
          {history.map((el, i) => {
            return (
              <div className="libCard" key={i}>
                <NavLink
                  to={"/iframe"}
                  onClick={() => {
                    setvid(el);
                  }}
                >
                  <div className="preview">
                    <img src={el.img} alt="library video preview" />
                  </div>
                  <div className="lib-title">
                    <p>{el?.title}</p>
                    <div className="lib-views">
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
