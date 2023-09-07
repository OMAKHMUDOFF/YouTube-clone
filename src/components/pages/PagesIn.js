import { Route, Routes } from "react-router-dom";
import { Main } from "./topLinks/Main";
import { useState } from "react";
import preview1 from "../../img/data-imgs/preview1.webp";
import preview2 from "../../img/data-imgs/preview2.webp";
import preview3 from "../../img/data-imgs/preview3.webp";
import preview4 from "../../img/data-imgs/preview4.webp";
import preview5 from "../../img/data-imgs/preview5.webp";
import preview6 from "../../img/data-imgs/preview6.webp";
import preview7 from "../../img/data-imgs/preview7.webp";
import preview8 from "../../img/data-imgs/preview8.webp";
import preview9 from "../../img/data-imgs/preview9.webp";
import preview10 from "../../img/data-imgs/preview10.webp";

export default function Rout() {
  let [videos, setVideo] = useState([
    {
      id: 1,
      img: preview1,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/MaV9VqFMzB4?si=qHYaJ90kh9c7pgk3",
    },
    {
      id: 2,
      img: preview2,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/womd8BFIbDY?si=xtTT8Sbyr2wPPUqT",
    },
    {
      id: 3,
      img: preview3,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/yFcDHCOAue0?si=c35nMngP2AWbavPZ",
    },
    {
      id: 4,
      img: preview4,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/eojGa62NOKg?si=L4kFYhtXAviyJsc3",
    },
    {
      id: 5,
      img: preview5,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/wYpCWwD1oz0?si=kk0Mq8w9YPZ-Bs7I",
    },
    {
      id: 6,
      img: preview6,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/bn-0Va9wOKI?si=0Gimeap9zaVYEp7d",
    },
    {
      id: 7,
      img: preview7,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/HvB61U1ENvM?si=RRVIBqdkLguY47ep",
    },
    {
      id: 8,
      img: preview8,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/ssX0B6sg_BQ?si=Or2BhPwFdVHFUwJl",
    },
    {
      id: 9,
      img: preview9,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/1H-vSHVOxoU?si=-NeAhnXuXkEQT5q_",
    },
    {
      id: 10,
      img: preview10,
      profile: "",
      title: "",
      author: "",
      views: "",
      published: "",
      link: "https://youtu.be/4MBSdyqNWGY?si=exPFFgZ2Ja5oWhwc",
    },
  ]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Main videos={videos} setVideo={setVideo} />}
      ></Route>
    </Routes>
  );
}
