import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type TItem = {
    id : number ,
    title : string,
    desc : string,
    icon : any,
    iconTwo?: any
}

export const data: TItem[] = [
    {
        id : 1,
        title : 'Html5',
        desc : 'Front end section',
        icon : FaHtml5
    },
    {
        id : 2,
        title : 'CSS & Bootstrap',
        desc : 'Front end section', 
        icon : FaCss3Alt
    },
    {
        id : 3,
        title : 'JS & TS',
        desc : 'Front end section',
        icon: FaJsSquare ,
        iconTwo : SiTypescript 
    },

    {
        id : 4,
        title : 'React',
        desc : 'Front end section',
        icon : FaReact
    },
    {
        id : 5,
        title : 'php',
        desc : 'Back end section',
        icon : FaPhp
    },

    {
        id : 6,
        title : 'MySQL',
        desc : 'Back end section',
        icon : SiMysql
    },
    {
        id : 7,
        title : 'Laravel',
        desc : 'Back end section',
        icon : FaLaravel
    },
    {
        id : 8,
        title : 'Git & GitHup',
        desc : 'To manage project',
        icon : FaGithub

    },
]

