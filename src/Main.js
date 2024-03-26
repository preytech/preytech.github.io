import Header from './header';
import Arrow from "./images/mainButtonArrow.svg";
import Kid from "./images/kid.png";
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
import './App.css';

function Main()
{
    return(
        <div className="bg-[#F9F9FA]">
            <Header />
            <p className = "container mx-auto text-[#888888] font-Light">Стоматологические услуги по бюджетным ценам</p>
            <div className = "flex justify-between container mx-auto py-5">
                <div className = "flex flex-col justify-center gap-12">
                    <div className = "font-Black text-8xl flex flex-col gap-[30px]">
                        <p>Ваша улыбка -</p>
                        <p className = "text-Blue">наш приоритет</p>
                    </div>
                        <div className = "w-[250px] flex flex-col gap-[20px] items-center font-Light relative">
                            <button className = "bg-Blue text-white px-8 py-2 rounded-lg font-Light">
                                <p>Акции и предложения</p>
                            </button>
                            <button className = "border-Blue border rounded-lg px-6 py-1 flex items-center gap-2.5">
                                <p className = "text-black font-Light">Подробнее</p>
                                <img src = {Arrow} alt = ""/>
                            </button>
                            <img className = "absolute bottom-[100px] right-[240px]" src = {BlackMicroStar1} alt = ""/>
                            <img className = "absolute top-20 right-[210px]" src = {BlueMicroStar1} alt = ""/>
                            <img className = "absolute left-[210px] top-[70px]" src = {BlueArrow} alt = ""/>
                        </div>
                    <div className = "relative w-[160px] flex self-center text-sm relative">
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
                    <p className = "text-[#FFFFFF76] font-Light">Проведённых процедур</p>
                </div>
                <div className = "flex flex-col gap-5 items-center border-x-2 border-[#FFFFFF24] w-full">
                    <p className = "text-5xl font-Bold">4,6+</p>
                    <p className = "text-[#FFFFFF76] font-Light">Средняя оценка</p>
                </div>
                <div className = "flex flex-col gap-5 items-center w-full">
                    <p className = "text-5xl font-Bold">600+</p>
                    <p className = "text-[#FFFFFF76] font-Light">Довольных клиенов</p>
                </div>
                <img className = "absolute left-0 top-0" src = {LeftWaves} alt = "бля.."/>
                <img className = "absolute right-0 top-0" src = {RightWaves} alt = "бля.."/>
            </div>
        </div>
    );
}

export default Main;