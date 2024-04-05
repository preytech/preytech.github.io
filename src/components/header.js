import logo from '../logo.svg';
import { Button } from './lilcoms';

const links = [
    {
        text: "Услуги",
        url: "/",
    },
    {
        text: "Врачи",
        url: "/",
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
    const linksJsx = links.map((elem, i) => {
        return <Link text={elem.text} url={elem.url} key={i} />
    });
    return(
        <header className = "border-b border-Trans20 px-16 py-3 bg-white">
            <div className='flex justify-between items-center container mx-auto'> 
                <div className = "flex items-center gap-1.5">
                    <img className = "w-8" src = {logo} alt = ""/>
                    <p className = "font-Black text-4xl text-Blue">DENTIQUE</p>
                </div>
                <nav className = "flex gap-16">
                    {linksJsx}
                </nav>
                <Button text = "Запись" font = "Bold" isBlue = "yes"/>
            </div>
        </header>
    );
}

function Link({text, url}) {
    return <a href={url} className = "font-Light text-sm text-Gray">{text}</a>
}

export default Header;