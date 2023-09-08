export function Iframe({ iframe }) {
  return (
    <>
      <div className="videoContain">
        {iframe.map((item, i) => {
          return (
            <div className="video">
              <iframe
                key={i}
                src={item.link}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </>
  );
}
