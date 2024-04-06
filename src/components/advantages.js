import Stars from "../images/stars.svg";
import Phone12 from "../images/phone12.svg";
import Microscope from "../images/microscope2.svg";
import Phone24 from "../images/phone24.svg";
import Wallet from "../images/wallet.svg";
import Doctor from "../images/doctor.svg";

const cardData = [
    {
        image: Stars,
        name: "5 - средняя оценка",
        desc: "У нас 5-звездочный рейтинг в Google, так что вы можете быть уверены, что получаете наилучший сервис из возможных"
    },
    {
        image: Phone12,
        name: "Рабочий день 12 часов",
        desc: "Клиника работает 7 дней в неделю по 12 часов, и готова оказать вам качественные услуги"
    },
    {
        image: Microscope,
        name: "Современное оборудование",
        desc: "Наша стоматология оснащена новейшим медицинским оборудованием"
    },
    {
        image: Phone24,
        name: "Онлайн-запись 24/7",
        desc: "Наш сайт готов помочь вам записаться на прием в любое время суток"
    },
    {
        image: Wallet,
        name: "Выгодная цена",
        desc: "Вы можете получить лучшее соотношение цены и качества за свои деньги"
    },
    {
        image: Doctor,
        name: "Сертифицированные врачи",
        desc: "Наши работники  сертифицированные врачи и специалисты, которые используют новейшее оборудование"
    }
]

function Advantages()
{
    return(
        <div className = "grid grid-rows-2 grid-cols-3 gap-10">
            { cardData.map((elem, i) => { return <Card image = {elem.image} name = {elem.name} desc = {elem.desc}/>}) }
        </div>
            
        );
}

function Card({image, name, desc})
{
    return(
        <div className = "flex flex-col items-center p-10 border border-Trans20 rounded-xl justify-center">
            <img className = "w-20" src = {image} alt = ""/>
            <p className = "font-Bold text-lg w-52 text-center py-2 leading-tight">{name}</p>
            <p className = "font-Light text-Gray3 text-sm w-48 text-center">{desc}</p>
        </div>
    );
}

export default Advantages;