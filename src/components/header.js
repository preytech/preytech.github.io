import { useState } from 'react';
import { Button } from './lilcoms';
import { Link } from "react-router-dom";
import { InputForm } from './form';

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
        url: "/about",
    }
];

function Header()
{
    const [isOpened, setIsOpened] = useState(false);

    function openModal()
    {
        setIsOpened(true);
        document.body.style.overflow = "hidden";
    }

    function closeModal()
    {
        setIsOpened(false)
        document.body.style.overflow = "scroll";
    }

    const modal = 
        <div className = "fixed top-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#00000080] z-10">
            <div className = "bg-white rounded-xl p-4 relative">
                <form className = "flex flex-col gap-4 items-center">
                    <InputForm text = "Имя" type = "text" placeText = "Олег"/>
                    <InputForm text = "Номер телефона" type = "text" placeText = "8 800 555 35 35"/>
                    <input className = "px-10 flex items-center py-2.5 font-Light bg-Blue rounded-md text-white" type = "submit"/>
                </form>
                <p onClick = {closeModal} className = "cursor-pointer absolute top-0 right-4">x</p>
            </div>
        </div>
    
    return(
        <>
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
                <div onClick = {openModal}>
                    <Button text = "Запись" font = "Bold" isBlue = "yes"/>
                </div>
            </div>
        </header>
        {isOpened ? modal : ""}
        </>
    );
}

function LinkCustomized({text, url}) {
    return <div className = "font-Light text-sm text-Gray hover:text-black"><Link to = {url}>{text}</Link></div>
}

export default Header;