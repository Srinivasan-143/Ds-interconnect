import Trone from "../assets/Trone1.jpg";
import Ics from "../assets/backgroundpic.jpg";
import menu_icon from "../assets/menu_icon.png";
import cross_icon from "../assets/cross_icon.png";
import PCB from "../assets/Pcb_Desinging.jpg";
import Telemtry from "../assets/Telemetry.jpg";
import Project from "../assets/Projects.jpg"
import RDProject from "../assets/RD_Projects.jpg";
import InterShip from "../assets/InterShip.jpg";
import MiniProject from "../assets/MiniProject.jpg";
import Seminar from "../assets/Seminar.jpg";
import Webinar from "../assets/Webinar.jpg";



export const assests = {
  Trone,
  Ics,
  menu_icon,
  cross_icon,
  Project,
  PCB,
  Telemtry
};

export const courses = [
  {
    id: self.crypto.randomUUID(),
    img: Trone,
    name: "Trone Assemble",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: PCB,
    name: "PCB Designing",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Telemtry,
    name: "Telemetry",
    level: "Begineer to Advance",
    language: "English",
  },
  {
    id: self.crypto.randomUUID(),
    img: Ics,
    name: "Embeded System Testing",
    level: "Begineer to Advance",
    language: "English",
  },
];


export const offer=[
  {
    id:self.crypto.randomUUID(),
    img:InterShip,
    descrption:"InterShip for College Students",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:Seminar,
    descrption:"Workshop in School And Colleges",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:Webinar,
    descrption:"Seminar &Webinar",
    align:"left",
  },
  {
    id:self.crypto.randomUUID(),
    img:MiniProject,
    descrption:"Mini Project for Final Year Students",
    align:"right",
  },
  {
    id:self.crypto.randomUUID(),
    img:RDProject,
    descrption:"R&D Project Support",
    align:"left",
  }
]


export const questions = [
  {
    quesid:1,
    qusetion:"question 1",
    answer:"answer for question 1",
    class:"ques-1",
  },
  {
    quesid:2,
    qusetion:"question 2",
    answer:"answer for question 2",
    class:"ques-2",

  },
  {
    quesid:3,
    qusetion:"question 3",
    answer:"answer for question 3",
    class:"ques-3",

  },
  {
    quesid:4,
    qusetion:"question 4",
    answer:"answer for question 4",
    class:"ques-4",

  },
  {
    quesid:5,
    qusetion:"question 5",
    answer:"answer for question 5",
    class:"ques-5",

  },{
    quesid:6,
    qusetion:"question 6",
    answer:"answer for question 6",
    class:"ques-6",

  },
];