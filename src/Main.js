import Header from './components/header';
import Cards from "./components/SalesCards";
import Advantages from './components/advantages';

import Kid from "./images/kid.webp";
import Circle from "./images/blackCircle.svg";
import WhiteStar from "./images/whiteStar1.svg";
import BlackMiniStar from "./images/blackMiniStar1.svg";
import BlueMiniStar2 from "./images/blueMicroStar2.svg";
import BlueRing from "./images/blueRing.svg";
import BlueArrow from "./images/blueArrow.svg";
import BlackMicroStar1 from "./images/blackMicroStar1.svg";
import BlackMicroStar2 from "./images/blackMicroStar2.svg";
import LeftWaves from "./images/leftWaves.svg";
import RightWaves from "./images/rightWaves.svg";
import BlueMicroStar1 from "./images/blueMicroStar1.svg";
import Arrow from "./images/mainButtonArrow.svg";
import BigBlackStar from "./images/blackBigStar.svg";
import Phone from "./images/phone.svg";
import Mail from "./images/mail.svg";
import Geo from "./images/geo.svg";
import Twitter from "./images/twitter.svg";
import Instagram from "./images/instagram.svg";
import Discord from "./images/discord.svg";
import MegaWaves from "./images/megaWaves.svg";

import './App.css';

import { Button } from './components/lilcoms';

function Main()
{
    return(
        <div className="bg-[#F9F9FA]">
            <Header />
            <p className = "container mx-auto text-Gray font-Light">Стоматологические услуги по бюджетным ценам</p>
            <div className = "flex justify-between container mx-auto py-5">
                <div className = "flex flex-col justify-center gap-12">
                    <div className = "font-Black text-8xl flex flex-col gap-[30px]">
                        <p>Ваша улыбка -</p>
                        <p className = "text-Blue">наш приоритет</p>
                    </div>
                        <div className = "w-[250px] flex flex-col gap-[20px] items-center font-Light relative">
                            <Button text = "Каталог услуг" font = "Light" isBlue = "yes"/>
                            <Button text = "Подробнее" font = "Light" arrow = {Arrow}/>
                            <img className = "absolute bottom-28 left-3.5" src = {BlackMicroStar1} alt = ""/>
                            <img className = "absolute top-20 right-56" src = {BlueMicroStar1} alt = ""/>
                            <img className = "absolute left-56 top-20" src = {BlueArrow} alt = ""/>
                        </div>
                    <div className = "relative w-[160px] flex self-center text-sm">
                        <p className = "font-Light">Начните знакомство с нашей стоматологией выгодно</p>
                        <img className = "absolute right-[30px] bottom-[57px]" src = {BlackMicroStar2} alt = ""/>
                        <img className = "absolute bottom-[7px] right-[165px]" src = {BlueMiniStar2} alt = ""/>
                    </div>
                </div>            
                <div className = "relative">
                    <img className = "rounded-full w-[580px] h-[580px] object-cover" src = {Kid} alt = ""/>
                    <img className = "absolute top-12 left-[420px] object-cover rounded-full" src = {Circle} alt = ""/>
                    <img className = "absolute top-5 left-5" src = {WhiteStar} alt = ""/>
                    <img className = "absolute top-[90px] left-0" src = {BlackMiniStar} alt = ""/>
                    <img className = "absolute bottom-6 left-6" src = {BlueRing} alt = ""/>
                </div>
            </div>
            <div className = "bg-[#151516] rounded-xl w-full container mx-auto text-white flex justify-between py-8 px-20 relative">
                <div className = "flex flex-col gap-5 items-center w-full">
                    <p className = "text-5xl font-Bold">12000+</p>
                    <p className = "text-Trans76 font-Light">Проведённых процедур</p>
                </div>
                <div className = "flex flex-col gap-5 items-center border-x-2 border-[#FFFFFF24] w-full">
                    <p className = "text-5xl font-Bold">4,6+</p>
                    <p className = "text-Trans76 font-Light">Средняя оценка</p>
                </div>
                <div className = "flex flex-col gap-5 items-center w-full">
                    <p className = "text-5xl font-Bold">600+</p>
                    <p className = "text-Trans76 font-Light">Довольных клиенов</p>
                </div>
                <img className = "absolute left-0 top-0" src = {LeftWaves} alt = "бля.."/>
                <img className = "absolute right-0 top-0" src = {RightWaves} alt = "бля.."/>
            </div>
            <div className = "pt-40 flex flex-col items-center">
                <p className = "font-Black text-Black text-6xl pb-10 relative">
                    Акции и предложения
                    <img className = "absolute bottom-28 left-64" src = {BigBlackStar} alt = ""/>
                </p>
                <Cards/>
            </div>
            <div className = "pt-40 flex flex-col items-center">
                <p className = "font-Black text-Black text-6xl pb-10">
                    Почему люди выбирают нас?
                </p>
                <Advantages/>
            </div>
            <div className = "py-40 flex flex-col items-center">
                <p className = "font-Black text-Black text-6xl pb-10">
                    Свяжитесь с нами!
                </p>
                <div className = "border border-Trans20 rounded-xl flex p-2">
                    <div className = "bg-Blue rounded-xl p-8 w-[550px] flex flex-col gap-80 relative">
                        <div className = "font-Light text-white flex flex-col gap-10">
                            <p className = "text-4xl">Контактная информация</p>
                            <Contacts image = {Phone} text = "8 800 555 35 35"/>
                            <Contacts image = {Mail} text = "abc@gmail.com"/>
                            <Contacts image = {Geo} text = "Руставели 33, Санкт-Петербург"/>
                        </div>
                        <div className = "flex gap-4">
                            <img src = {Twitter} alt = ""/>
                            <img src = {Instagram} alt = ""/>
                            <img src = {Discord} alt = ""/>
                        </div>
                        <img className = "absolute bottom-0 right-0" src = {MegaWaves} alt = ""/>
                    </div>
                    <form className = "p-4 flex flex-col justify-center gap-52 items-center">
                        <div>
                            <div className = "grid grid-cols-2 grid-rows-2 gap-8 pb-8">
                                <InputForm text = "Имя" type = "text" placeText = "Олег"/>
                                <InputForm text = "Фамилия" type = "text" placeText = "Иванов"/>
                                <InputForm text = "Почта" type = "text" placeText = "abc@gmail.com"/>
                                <InputForm text = "Номер телефона" type = "text" placeText = "8 800 555 35 35"/>
                            </div>
                            <InputForm text = "Сообщение" type = "text" placeText = "Напишите ваше сообщение" w = "full" h = "10"/>
                        </div>
                        <input className = "px-10 flex items-center py-2.5 font-Light bg-Blue rounded-md text-white" type = "submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Contacts({image, text})
{
    return(
        <div className = "flex gap-3">
            <img src = {image} alt = ""/>
            <p className = "font-Light">{text}</p>
        </div>
    );
}

function InputForm({text, type, placeText, w, h})
{
    let width = "72";
    let height = "10";

    if (w && h)
    {
        width = w;
        height = h;
    }

    return(
        <div className = "flex flex-col gap-2">
            <label>{text}</label>
            <input className = {"border border-Trans20 w-" + width + " h-" + height + " rounded-md placeholder:font-Light placeholder:text-Gray3 placeholder:pl-2"} type = {type} placeholder = {placeText} />
        </div>
    );
}

export default Main;