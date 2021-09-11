import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = [
    {
        link: 'https://haonan.zhang.website.s3-website.us-east-2.amazonaws.com/',
        label: 'Web',
        icon: <MdWeb />,
    },
    {
        link: 'https://github.com/conanzahn',
        label: 'Github',
        icon: <FaGithub />,
    },
    {
        link: 'https://www.linkedin.com/in/haonan-zhang-unsw/',
        label: 'Linkedin',
        icon: <FaLinkedin />,
    },
    {
        link: 'https://www.instagram.com/conanzahn/',
        label: 'Instagram',
        icon: <FaInstagramSquare />,
    },
    {
        link: 'mailto:conanzahn@gmail.com',
        label: 'Email',
        icon: <GrMail />,
    },
    {
        link: 'https://www.facebook.com/haonan.zhang.1420/',
        label: 'Facebook',
        icon: <FaFacebook />,
    },
    {
        link: 'https://twitter.com/ConanZahn',
        label: 'Twitter',
        icon: <FaTwitter />,
    },
];

export default Contact;