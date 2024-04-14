import { Button } from './lilcoms';
import { Link } from "react-router-dom";

const links = [
    {
        text: "Услуги",
        url: "/servises",
    },
    {
        text: "Врачи",
        url: "/doctors",
    },
    {
        text: "О нас",
        url: "/contacts",
    },
    {
        text: "Отзывы",
        url: "/about",
    },
    {
        text: "Контакты",
        url: "/about",
    },
];

function Header()
{
    return(
        <header className = "border-b border-Trans20 px-16 py-3 bg-white">
            <div className='flex justify-between items-center container mx-auto'>
                <Link to = "/">
                    <div className = "flex items-center gap-1.5">
                        <img className = "w-8" src = "/media/header/logo.svg" alt = ""/>
                        <p className = "font-Black text-4xl text-Blue">DENTIQUE</p>
                    </div>
                </Link>
                <nav className = "flex gap-16">
                    {links.map((elem, i) => { return <LinkCustomized text = {elem.text} url = {elem.url} key = {i}/>})}
                </nav>
                <Button text = "Запись" font = "Bold" isBlue = "yes"/>
            </div>
        </header>
    );
}

function LinkCustomized({text, url}) {
    return <div className = "font-Light text-sm text-Gray hover:text-black"><Link to = {url}>{text}</Link></div>
}

export default Header;