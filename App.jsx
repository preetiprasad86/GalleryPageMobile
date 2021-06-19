import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X05GalleryPageMobile from "./components/X05GalleryPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|05-gallery-page-mobile)">
          <X05GalleryPageMobile {...x05GalleryPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const antDesignplayCircleOutlined22Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg",
};

const youtubeThumbnail22Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-18@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "",
};

const youtubeCard22Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail22Data,
};

const youtubeThumbnail222Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-19@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard222Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail222Data,
};

const frame1628Data = {
    youtubeCard2Props: youtubeCard22Data,
    youtubeCard22Props: youtubeCard222Data,
};

const youtubeThumbnail223Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-20@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard223Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail223Data,
};

const youtubeThumbnail224Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-21@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard224Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail224Data,
};

const frame16282Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard223Data,
    youtubeCard22Props: youtubeCard224Data,
};

const youtubeThumbnail225Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-22@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard225Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail225Data,
};

const youtubeThumbnail226Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-23@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-161@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard226Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail226Data,
};

const frame16283Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard225Data,
    youtubeCard22Props: youtubeCard226Data,
};

const youtubeThumbnail227Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-24@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-173@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard227Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    youtubeThumbnail2Props: youtubeThumbnail227Data,
};

const youtubeThumbnail228Data = {
    youtubeThumbnail: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-25@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-173@2x.svg",
    className: "youtube-thumbnail",
};

const youtubeCard228Data = {
    text171: "Lorem Ipsum passages of Lorem Ipsum available",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    className: "youtube-card-1",
    youtubeThumbnail2Props: youtubeThumbnail228Data,
};

const frame16284Data = {
    className: "frame-16",
    youtubeCard2Props: youtubeCard227Data,
    youtubeCard22Props: youtubeCard228Data,
};

const button22Data = {
    children: "VIEW MORE",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-18@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const group322Data = {
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-149@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-149@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
    text165: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text164: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group2122Data = {
    group862Props: group8622Data,
    group872Props: group872Data,
    group322Props: group322Data,
    frame5Props: frame5Data,
};

const x05GalleryPageMobileData = {
    ourProjects: "Our Projects",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@2x.png",
    latestVideos: "LATEST VIDEOS",
    text170: "Lorem Ipsum passages of Lorem Ip...",
    address: "1034 Views / 24 May 2021 / 45 Comments",
    text169: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    frame145Props: frame145Data,
    antDesignplayCircleOutlined2Props: antDesignplayCircleOutlined22Data,
    frame1628Props: frame1628Data,
    frame16282Props: frame16282Data,
    frame16283Props: frame16283Data,
    frame16284Props: frame16284Data,
    button22Props: button22Data,
    group2122Props: group2122Data,
};

