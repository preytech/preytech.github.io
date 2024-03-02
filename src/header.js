import logo from './logo.svg';

const links = [
    {
        text: "Услуги",
        url: "/",
    },
    {
        text: "Наши врачи",
        url: "/",
    },
    {
    },
    {
        text: "Отзывы",
        url: "/contacts",
    },
    {
        text: "О нас",
        url: "/about",
    },
];

function Header()
{
    const linksJsx = links.map((elem, i) => {
        return <Link text={elem.text} url={elem.url} key={i} />
    });
    return(
        <header>
            <div className='flex '>
                <img src = {logo}/>
                <p className='text-text font-lato text-2xl'>DENTIQUE</p>
            </div>
            <nav>
                {linksJsx}
            </nav>
            <div>

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