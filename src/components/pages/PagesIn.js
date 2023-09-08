import { Route, Routes } from "react-router-dom";
import { Main } from "./topLinks/Main";
import { useState } from "react";
import { Shorts } from "./topLinks/Shorts";
import { Subs } from "./topLinks/Subs";
import { Lib } from "./topLinks/Lib";
import { History } from "./topLinks/History";

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

import proghub from "../../img/author-profile/ProgHub.jpg";
import asmrprog from "../../img/author-profile/AsmrProg.jpg";
import servet from "../../img/author-profile/servet.jpg";
import senseipubg from "../../img/author-profile/senseipubg.jpg";
import edroh from "../../img/author-profile/EdRoh.jpg";
import welson from "../../img/author-profile/welson.jpg";
import brian from "../../img/author-profile/brian.jpg";
import hash from "../../img/author-profile/hash.jpg";
import offbro from "../../img/author-profile/OfficialBro.jpg";
import { Trending } from "./Navigators/Trending";
import { Music } from "./Navigators/Music";
import { Live } from "./Navigators/Lives";
import { Gaming } from "./Navigators/Gaming";
import { News } from "./Navigators/News";
import { Sport } from "./Navigators/Sport";
import { Educate } from "./Navigators/Educate";
import { Fashion } from "./Navigators/Fashion";
import { Catalog } from "./Navigators/Catalog";
import { Iframe } from "./Iframe";

export default function Rout() {
  let [videos, setVideo] = useState([
    {
      id: 1,
      img: preview1,
      profile: proghub,
      title: "ASMR Programming - Coding IOS(IPhone Calculator - No Talking)",
      author: "ProgHub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/MaV9VqFMzB4?si=HjypxzgK3vjfR34i",
    },
    {
      id: 2,
      img: preview2,
      profile: asmrprog,
      title:
        "ASMR Programming - Complete Responsive Portfolio Design - No Talking)",
      author: "AsmrProg",
      views: 29,
      published: 2,
      link: "https://www.youtube.com/embed/womd8BFIbDY?si=0UU0VdJqldvd1ey6",
    },
    {
      id: 3,
      img: preview3,
      profile: servet,
      title: "ASMR Programming - Starbucks Home Page - No Talking",
      author: "Servet Gulnaroglu",
      views: 976,
      published: 1,
      link: "https://www.youtube.com/embed/yFcDHCOAue0?si=6FST4iRQxct2iDnD",
    },
    {
      id: 4,
      img: preview4,
      profile: senseipubg,
      title: "1440x1080 PUBG HIGHLIGHTS #78 | PUBG Montage",
      author: "Sensei 4K",
      views: 1.7,
      published: 1,
      link: "https://youtube.com/embed/eojGa62NOKg?si=L4kFYhtXAviyJsc3",
    },
    {
      id: 5,
      img: preview5,
      profile: edroh,
      title:
        "Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode",
      author: "EdRoh",
      views: 949,
      published: 10,
      link: "https://youtube.com/embed/wYpCWwD1oz0?si=kk0Mq8w9YPZ-Bs7I",
    },
    {
      id: 6,
      img: preview6,
      profile: welson,
      title:
        "СОЗДАЛ РАБОЧЕЕ И ИГРОВОЕ МЕСТО МЕЧТЫ, МИНИМАЛИСТИЧНО И ПРАКТИЧНО В 2022г",
      author: "Welson",
      views: 700,
      published: 1,
      link: "https://youtube.com/embed/bn-0Va9wOKI?si=0Gimeap9zaVYEp7d",
    },
    {
      id: 7,
      img: preview7,
      profile: brian,
      title: "Coding In AR | Day In The Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 38,
      published: 2,
      link: "https://youtube.com/embed/HvB61U1ENvM?si=RRVIBqdkLguY47ep",
    },
    {
      id: 8,
      img: preview8,
      profile: brian,
      title: "Office Tour | A Day in the Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 1.1,
      published: 7,
      link: "https://youtube.com/embed/ssX0B6sg_BQ?si=Or2BhPwFdVHFUwJl",
    },
    {
      id: 9,
      img: preview9,
      profile: hash,
      title: "Animated Login Form Using HTML & CSS",
      author: "Hash Techie",
      views: 1,
      published: 7,
      link: "https://youtube.com/embed/1H-vSHVOxoU?si=-NeAhnXuXkEQT5q_",
    },
    {
      id: 10,
      img: preview10,
      profile: offbro,
      title: "DREAM DESK 2 | Ремонт, Прокачка рабочего места, Новые девайсы",
      author: "OfficialBro",
      views: 687,
      published: 2,
      link: "https://youtube.com/embed/4MBSdyqNWGY?si=exPFFgZ2Ja5oWhwc",
    },
    {
      id: 1,
      img: preview1,
      profile: proghub,
      title: "ASMR Programming - Coding IOS(IPhone Calculator - No Talking)",
      author: "ProgHub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/MaV9VqFMzB4?si=HjypxzgK3vjfR34i",
    },
    {
      id: 2,
      img: preview2,
      profile: asmrprog,
      title:
        "ASMR Programming - Complete Responsive Portfolio Design - No Talking)",
      author: "AsmrProg",
      views: 29,
      published: 2,
      link: "https://www.youtube.com/embed/womd8BFIbDY?si=0UU0VdJqldvd1ey6",
    },
    {
      id: 3,
      img: preview3,
      profile: servet,
      title: "ASMR Programming - Starbucks Home Page - No Talking",
      author: "Servet Gulnaroglu",
      views: 976,
      published: 1,
      link: "https://www.youtube.com/embed/yFcDHCOAue0?si=6FST4iRQxct2iDnD",
    },
    {
      id: 4,
      img: preview4,
      profile: senseipubg,
      title: "1440x1080 PUBG HIGHLIGHTS #78 | PUBG Montage",
      author: "Sensei 4K",
      views: 1.7,
      published: 1,
      link: "https://youtube.com/embed/eojGa62NOKg?si=L4kFYhtXAviyJsc3",
    },
    {
      id: 5,
      img: preview5,
      profile: edroh,
      title:
        "Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode",
      author: "EdRoh",
      views: 949,
      published: 10,
      link: "https://youtube.com/embed/wYpCWwD1oz0?si=kk0Mq8w9YPZ-Bs7I",
    },
    {
      id: 6,
      img: preview6,
      profile: welson,
      title:
        "СОЗДАЛ РАБОЧЕЕ И ИГРОВОЕ МЕСТО МЕЧТЫ, МИНИМАЛИСТИЧНО И ПРАКТИЧНО В 2022г",
      author: "Welson",
      views: 700,
      published: 1,
      link: "https://youtube.com/embed/bn-0Va9wOKI?si=0Gimeap9zaVYEp7d",
    },
    {
      id: 7,
      img: preview7,
      profile: brian,
      title: "Coding In AR | Day In The Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 38,
      published: 2,
      link: "https://youtube.com/embed/HvB61U1ENvM?si=RRVIBqdkLguY47ep",
    },
    {
      id: 8,
      img: preview8,
      profile: brian,
      title: "Office Tour | A Day in the Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 1.1,
      published: 7,
      link: "https://youtube.com/embed/ssX0B6sg_BQ?si=Or2BhPwFdVHFUwJl",
    },
    {
      id: 9,
      img: preview9,
      profile: hash,
      title: "Animated Login Form Using HTML & CSS",
      author: "Hash Techie",
      views: 1,
      published: 7,
      link: "https://youtube.com/embed/1H-vSHVOxoU?si=-NeAhnXuXkEQT5q_",
    },
    {
      id: 10,
      img: preview10,
      profile: offbro,
      title: "DREAM DESK 2 | Ремонт, Прокачка рабочего места, Новые девайсы",
      author: "OfficialBro",
      views: 687,
      published: 2,
      link: "https://youtube.com/embed/4MBSdyqNWGY?si=exPFFgZ2Ja5oWhwc",
    },
    {
      id: 1,
      img: preview1,
      profile: proghub,
      title: "ASMR Programming - Coding IOS(IPhone Calculator - No Talking)",
      author: "ProgHub",
      views: 1.2,
      published: 11,
      link: "https://www.youtube.com/embed/MaV9VqFMzB4?si=HjypxzgK3vjfR34i",
    },
    {
      id: 2,
      img: preview2,
      profile: asmrprog,
      title:
        "ASMR Programming - Complete Responsive Portfolio Design - No Talking)",
      author: "AsmrProg",
      views: 29,
      published: 2,
      link: "https://www.youtube.com/embed/womd8BFIbDY?si=0UU0VdJqldvd1ey6",
    },
    {
      id: 3,
      img: preview3,
      profile: servet,
      title: "ASMR Programming - Starbucks Home Page - No Talking",
      author: "Servet Gulnaroglu",
      views: 976,
      published: 1,
      link: "https://www.youtube.com/embed/yFcDHCOAue0?si=6FST4iRQxct2iDnD",
    },
    {
      id: 4,
      img: preview4,
      profile: senseipubg,
      title: "1440x1080 PUBG HIGHLIGHTS #78 | PUBG Montage",
      author: "Sensei 4K",
      views: 1.7,
      published: 1,
      link: "https://youtube.com/embed/eojGa62NOKg?si=L4kFYhtXAviyJsc3",
    },
    {
      id: 5,
      img: preview5,
      profile: edroh,
      title:
        "Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode",
      author: "EdRoh",
      views: 949,
      published: 10,
      link: "https://youtube.com/embed/wYpCWwD1oz0?si=kk0Mq8w9YPZ-Bs7I",
    },
    {
      id: 6,
      img: preview6,
      profile: welson,
      title:
        "СОЗДАЛ РАБОЧЕЕ И ИГРОВОЕ МЕСТО МЕЧТЫ, МИНИМАЛИСТИЧНО И ПРАКТИЧНО В 2022г",
      author: "Welson",
      views: 700,
      published: 1,
      link: "https://youtube.com/embed/bn-0Va9wOKI?si=0Gimeap9zaVYEp7d",
    },
    {
      id: 7,
      img: preview7,
      profile: brian,
      title: "Coding In AR | Day In The Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 38,
      published: 2,
      link: "https://youtube.com/embed/HvB61U1ENvM?si=RRVIBqdkLguY47ep",
    },
    {
      id: 8,
      img: preview8,
      profile: brian,
      title: "Office Tour | A Day in the Life of a Software Engineer",
      author: "Brian Ruiz",
      views: 1.1,
      published: 7,
      link: "https://youtube.com/embed/ssX0B6sg_BQ?si=Or2BhPwFdVHFUwJl",
    },
    {
      id: 9,
      img: preview9,
      profile: hash,
      title: "Animated Login Form Using HTML & CSS",
      author: "Hash Techie",
      views: 1,
      published: 7,
      link: "https://youtube.com/embed/1H-vSHVOxoU?si=-NeAhnXuXkEQT5q_",
    },
    {
      id: 10,
      img: preview10,
      profile: offbro,
      title: "DREAM DESK 2 | Ремонт, Прокачка рабочего места, Новые девайсы",
      author: "OfficialBro",
      views: 687,
      published: 2,
      link: "https://youtube.com/embed/4MBSdyqNWGY?si=exPFFgZ2Ja5oWhwc",
    },
  ]);

  let [iframe, setIframe] = useState([]);

  function setvid(obj) {
    setIframe([...iframe, obj]);
  }


  return (
    <Routes>
      <Route
        path="/"
        element={<Main videos={videos} setVideo={setVideo} setvid={setvid} />}
      />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/subscribes" element={<Subs />} />
      <Route path="/library" element={<Lib />} />
      <Route path="/history" element={<History />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/music" element={<Music />} />
      <Route path="/live" element={<Live />} />
      <Route path="/gaming" element={<Gaming />} />
      <Route path="/news" element={<News />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/educate" element={<Educate />} />
      <Route path="/educate" element={<Educate />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route
        path={`/iframe`}
        element={<Iframe iframe={iframe} />}
      />
    </Routes>
  );
}
