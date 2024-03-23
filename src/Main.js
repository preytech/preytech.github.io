import Header from './header';
import Arrow from "./images/mainButtonArrow.svg";
import Kid from "./images/kid.png";
import Circle from "./images/blackCircle.png";
import WhiteStar from "./images/whiteStar1.svg";
import BlackMiniStar from "./images/blackMiniStar1.svg";
import BlueRing from "./images/blueRing.svg";
import BlueArrow from "./images/blueArrow.svg";
import BlackMicroStar1 from "./images/blackMicroStar1.svg";

import BlueMicroStar1 from "./images/blueMicroStar1.svg";
import './App.css';

function Main()
{
    return(
        <div className="bg-[#F9F9FA]">
            <Header />
            <p className = "container mx-auto text-[#888888] font-Light">Стоматологические услуги по бюджетным ценам</p>
            <div className = "flex justify-between container mx-auto">
                <div className = "flex flex-col justify-center gap-12">
                    <div className = "font-Black text-8xl flex flex-col gap-[30px]">
                        <p>Ваша улыбка -</p>
                        <p className = "text-Blue">наш приоритет</p>
                    </div>
                    <div>
                        <div className = "flex flex-col gap-[20px] font-Light relative justify-center">
                            <button className = "bg-Blue text-white px-12 rounded-lg font-Light">
                                <p>Акции и</p>
                                <p>предложения</p> 
                            </button>
                            <button className = "border-Blue border rounded-lg px-6 py-1 flex items-center gap-2.5">
                                <p className = "text-black font-Light">Подробнее</p>
                                <img src = {Arrow} alt = ""/>
                            </button>
                                <img className = "absolute bottom-[110px] right-[200px]" src = {BlackMicroStar1} alt = ""/>
                                <img className = "absolute top-20 right-[185px]" src = {BlueMicroStar1} alt = ""/>
                                <img className = "absolute left-[190px] top-[70px]" src = {BlueArrow} alt = ""/>
                            <div className = "relative w-[160px] flex self-center text-sm">
                                <p className = "font-Light">Начните знакомство с нашей стоматологией выгодно</p>
                            </div>
                        </div>
                    </div>
                </div>            
                <div className = "relative">
                    <img className = "rounded-full w-[580px] h-[580px] object-cover" src = {Kid} alt = ""/>
                    <img className = "absolute top-20 left-[450px] w-[184px] h-[150px]" src = {Circle} alt = ""/>
                    <img className = "absolute top-5 left-5" src = {WhiteStar} alt = ""/>
                    <img className = "absolute top-[90px] left-0" src = {BlackMiniStar} alt = ""/>
                    <img className = "absolute bottom-6 left-6" src = {BlueRing} alt = ""/>
                </div>
            </div>
        </div>
    );
}

export default Main;