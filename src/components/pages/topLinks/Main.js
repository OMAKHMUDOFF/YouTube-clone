import { NavLink } from "react-router-dom";

export function Main({ videos, setvid, inHistory }) {
  return (
    <div className="Main-page">
      <div className="videoCards">
        {videos.map((elem, i) => {
          return (
            <NavLink
              to={`/iframe`}
              className="videoCard"
              key={i}
              onClick={() => {
                setvid(elem); inHistory(elem);
              }}
            >
              <div className="preview">
                <img src={elem.img} alt="video preview" />
              </div>
              <div className="profile-photo">
                <div className="flex-title">
                  <img src={elem.profile} alt="profile img" />
                  <div className="video-title">
                    <h4>{elem.title}</h4>
                  </div>
                </div>
              </div>
              <div className="author-views">
                <p>{elem.author}</p>
                <p>{elem.views}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
