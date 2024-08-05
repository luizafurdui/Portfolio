import profilio1 from '../Images/profilio1.png';
import profilio2 from '../Images/profilio2.png';
import profilio3 from '../Images/profilio3.png';
import Lottie from 'lottie-react';
import { gmail, instagram, linkedin } from "../assets";

import NinjaCover from '../Images/NinjaCover.svg';
import AdsCover from '../Images/AdsCover.svg'; 
import AzukiCover from '../Images/AzukiCover.svg'; 
import LandscapesCover from '../Images/LandscapesCover.svg'; 
import ObjectsCover from '../Images/ObjectsCover.svg';
import RobotsCover from '../Images/RobotsCover.svg'; 
import WebIllustrationCover from '../Images/WebIllustrationCover.svg';
import AstronautCover from '../Images/AstronautCover.svg'; 

import Objects1 from '../Images/Objects1.png';
import Objects2 from '../Images/Objects2.png';
import Objects3 from '../Images/Objects3.png';
import Objects4 from '../Images/Objects4.png';

import web1 from '../Images/web1.png';
import web2 from '../Images/web2.png';
import web3 from '../Images/web3.png';
import web4 from '../Images/web4.png';
import web5 from '../Images/web5.png';
import web6 from '../Images/web6.png';

import landscape1 from '../Images/landscape1.png'; 
import landscape2 from '../Images/landscape2.png'; 
import landscape3 from '../Images/landscape3.png'; 

import pilot1 from '../Images/pilot1.png'; 
import pilot7 from '../Images/pilot7.svg'; 
import pilot8 from '../Images/pilot8.svg'; 
import pilot9 from '../Images/pilot9.svg'; 

import Nft1 from '../Images/Nft1.jpg'; 
import Nft2 from '../Images/Nft2.jpg'; 
import Nft3 from '../Images/Nft3.jpg'; 
import Nft4 from '../Images/Nft4.jpg'; 
import Nft5 from '../Images/Nft5.jpg'; 
import Nft6 from '../Images/Nft6.png'; 
import Nft7 from '../Images/Nft7.png'; 
import Nft8 from '../Images/Nft8.png'; 
//import Nft9 from '../Images/Nft9.png'; 
import Nft10 from '../Images/Nft10.png'; 
import Nft11 from '../Images/Nft11.png'; 
import Nft12 from '../Images/Nft12.png'; 
import Nft13 from '../Images/Nft13.jpg'; 
import Nft14 from '../Images/Nft14.png'; 

import azuki1 from '../Images/azuki1.png'; 
import azuki2 from '../Images/azuki2.png'; 
import azuki3 from '../Images/azuki3.png'; 


// Import Lottie animations
import robotAnimation from '../Images/robot.json';
import astronautAnimation from '../Images/astronaut.json';

const generateIdFromTitle = (title) => {
  return title.toLowerCase().replace(/ /g, '-');
};

export const navLinks = [
  {
    id: "designs",
    title: "Designs",
    path: '/',
  },
  {
    id: "contact",
    title: "About", // Aici m-am razgandit, imagineaza-ti ca about=contact
    path: '/contact'
  }
];

export const cards = [
  {
    id: generateIdFromTitle("Astronaut Illustrations"),
    title: "Astronaut Illustrations & Animations",
    year: "2024",
    cover: AstronautCover,
    path: '/Astronaut',
    description: "This project included designing and illustrating a set of minimalist astronauts for PagePilot. Perfect for web pages, or creative projects, these astronauts bring a sense of exploration and curiosity while maintaining a polished and modern aesthetic. Through this artwork, we aimed to blend the intriguing theme of space with a sense of serenity, encouraging viewers to explore beyond the visuals and into the realms of creativity and wonder.",
    client: " PagePilot",
    clientLink: "https://pagepilot.ai/?gc_id=20923015340&h_ga_id=157667023179&h_ad_id=700133250183&h_keyword_id=kwd-1929163959082&h_keyword=pagepilot&h_placement=&gad_source=1&gclid=Cj0KCQjwwae1BhC_ARIsAK4JfrxBTjN9JZlgtIDf3llMTzu1HGrnGVUoPUJmt1jr66hM9UABWQPqsIQaAhmIEALw_wcB",
    tools: "Procreate  Illustrator  AfterEffects",
    layout: "DisplayZigZag",
    photos: [ 
      pilot7, 
      pilot8, 
      pilot9, 
      pilot1, 
    ], 
    lottie: astronautAnimation // Use this instead of an array
  },
  {
    id: generateIdFromTitle("Facebook Illustrations"),
    title: "Facebook Ads",
    year: "2021",
    cover: AdsCover,
    path: '/Ads',
    description: "This project involved creating compelling ads for Profilio, focusing on delivering visually striking designs that effectively communicate the brand's message.",
    client: " Profilio",
    clientLink:"https://profilio.ai/",
    tools: "Procreate Figma",
    layout: "DisplayonRows",
    photos: [
      profilio1, 
      profilio2, 
      profilio3
    ]
  },
  {
    id: generateIdFromTitle("Illustrated Objects"),
    title: "Illustrated Objects",
    year: "2021",
    cover: ObjectsCover,
    path: '/IllustratedObjects',
    description: "This collection features an enchanting assortment of cute illustrated objects, perfect for adding a touch of simplicity and joy to any project. Perfect as stickers, they are ideal for decorating planners, laptops, water bottles, or any surface that could use a little extra fun",
    client: "",
    tools: "Procreate",
    layout: "DisplayonRows.jsx", 
    photos: [
      Objects2, 
      Objects1, 
      Objects3,
      Objects4
    ]
  },
  {
    id: generateIdFromTitle("Nfts Ninja Collection"),
    title: "Shadow Warriors: Ninja NFT Collection",
    year: "2022",
    cover: NinjaCover,
    path: '/Ninja',
    description: "Ninja NFT Collection is an exclusive series of digital art pieces that capture the stealth, agility, and mystique of the legendary ninja warriors. Each NFT in this collection features intricately designed characters, showcasing their unique skills, weapons, and attire.",
    client: "",
    tools: "Procreate",
    layout: "grid", 
    photos:[
      Nft1, 
      Nft2, 
      Nft13,
      Nft11,
      Nft14,
      Nft5,
      Nft6,
      Nft7,
      Nft8,
     // Nft9,
      Nft10,
 
      Nft3, 

    ]
  },
  {
    id: generateIdFromTitle("Nft Azuki Collection"),
    title: "Nft Azuki Collection",
    year: "2022",
    cover: AzukiCover,
    path: '/Azuki',
    description: "This Azuki Collection brings a fresh take on the original Azuki NFTs, with each piece carefully redrawn to highlight their iconic style. These updated versions retain the charm and essence of the originals while adding new artistic touches.",
    client: "",
    tools: "Procreate",
    layout: "grid",
    photos: [
      azuki1, 
      azuki2, 
      azuki3
    ]
  },
  {
    id: generateIdFromTitle("Web Illustrations"),
    title: "A Gallery of Landscape Illustrations",
    year: "2021",
    cover: LandscapesCover,
    path: '/WebIllustrations',
    description: "This collection features a series of simple yet whimsical landscape illustrations designed to capture the magic of the natural world.",
    client: "",
    tools: "Procreate",
    layout: "DisplayonRows", 
    photos: [
      landscape1, 
      landscape2,
      landscape3
    ]
  },
  {
    id: generateIdFromTitle("Illustrated Girls"),
    title: "Illustrated Girls",
    year: "2021",
    cover: WebIllustrationCover,
    path: '/WebIllustrations',
    description: "This project involved creating illustrated girl designs for web pages, aimed at enhancing visual appeal and user engagement through unique, vibrant illustrations crafted purely for fun and creative exploration.",
    tools: "Procreate",
    layout: "DisplayonRows",
    photos: [
      web1, 
      web2, 
      web4,
      web5,
      web6,
    ]
  },
  {
    id: generateIdFromTitle("Robot Concepts"),
    title: "Robot Concepts",
    year: "2023",
    cover: RobotsCover,
    path: '/RobotIllustrations',
    description: "It's just me for now",
    client: "",
    tools: "Figma LottieFiles",
    layout: "DisplayZigZag",
    lottie: robotAnimation // Add Lottie animation here if needed
  }
 
];

export const Clients = [
  {
    id: "client1",
    title: "Profilio"
  },
  {
    id: "client2",
    title: "PagePilot"
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: linkedin,
    link: "https://www.linkedin.com/in/furdui-luiza/",
  },
 
  {
    id: "social-media-3",
    icon: instagram,
    link: "https://www.instagram.com/luiza_frd/?igsh=czgzM2VxdHYxbTVy&utm_source=qr",
  }
];
