import logo from './logo.svg';
import './App.css';

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
                <div className = "">
                    <button className = "bg-Blue py-[10px] px-[40px] rounded-[6px]"><p className = "font-Bold text-white">Запись</p></button>
                </div>
            </div>
        </header>
    );
}

function Link({text, url}) {
    return (
        <a href={url}><p className="font-Light text-sm text-Gray">{text}</p></a>
    );
}

export default Header;