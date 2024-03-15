import logo from './logo.svg';

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
        <header className = "flex border-b border-borderColor px-16 py-2">
            <div className = "flex w-1/4">
                <img src = {logo} alt = ""/>
                <p className = "text-2xl">DENTIQUE</p>
            </div>
            <nav className = "flex justify-around w-2/4">
                {linksJsx}
            </nav>
            <div className = "w-1/4">
                <button>Записаться</button>
            </div>
        </header>
    );
}

function Link({text, url}) {
    return (
        <a className="text-text text-sm font-lato" href={url}>{text}</a>
    );
}

export default Header;