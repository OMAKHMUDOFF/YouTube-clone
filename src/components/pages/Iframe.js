export function Iframe({ iframe }) {
  return (
    <>
      <div className="videoContain">
        {iframe.map((item, i) => {
          return (
            <div className="video" key={i}>
              <iframe
                key={i}
                src={item.link}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="video-title">
                <h2>{item.title}</h2>
              </div>
              <div className="author-setting">
                <div className="author-img">
                  <img src={item.profile} alt="" />
                </div>
                <div className="author-video">
                  <h4>{item.author}</h4>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
