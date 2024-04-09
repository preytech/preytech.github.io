import Cards from "./components/SalesCards";
import Advantages from './components/advantages';
import Form from "./components/form";

import './App.css';

import { Button } from './components/lilcoms';

function Main()
{
    return(
        <main className="bg-[#F9F9FA]">
            <p className = "container mx-auto text-Gray font-Light">Стоматологические услуги по бюджетным ценам</p>
            <div className = "flex justify-between container mx-auto py-5">
                <div className = "flex flex-col justify-center gap-12">
                    <div className = "font-Black text-8xl flex flex-col gap-[30px]">
                        <p>Ваша улыбка -</p>
                        <p className = "text-Blue">наш приоритет</p>
                    </div>
                        <div className = "w-[250px] flex flex-col gap-[20px] items-center font-Light relative">
                            <Button text = "Каталог услуг" font = "Light" isBlue = "yes"/>
                            <Button text = "Подробнее" font = "Light" arrow = "/media/buttons/mainButtonArrow.svg"/>
                            <img className = "absolute bottom-28 left-3.5" src = "/media/heroPage/blackMicroStar1.svg" alt = ""/>
                            <img className = "absolute top-20 right-56" src = "/media/blueMicroStar1.svg" alt = ""/>
                            <img className = "absolute left-56 top-20" src = "/media/heroPage/blueArrow.svg" alt = ""/>
                        </div>
                    <div className = "relative w-[160px] flex self-center text-sm">
                        <p className = "font-Light">Начните знакомство с нашей стоматологией выгодно</p>
                        <img className = "absolute right-[30px] bottom-[57px]" src = "/media/heroPage/blackMicroStar2.svg" alt = ""/>
                        <img className = "absolute bottom-[7px] right-[165px]" src = "/media/heroPage/blueMicroStar2.svg" alt = ""/>
                    </div>
                </div>            
                <div className = "relative">
                    <img className = "rounded-full w-[580px] h-[580px] object-cover" src = "/media/heroPage/kid.webp" alt = ""/>
                    <img className = "absolute top-12 left-[420px] object-cover rounded-full" src = "/media/heroPage/blackCircle.svg" alt = ""/>
                    <img className = "absolute top-5 left-5" src = "/media/heroPage/whiteStar1.svg" alt = ""/>
                    <img className = "absolute top-[90px] left-0" src = "/media/heroPage/blackMiniStar1.svg" alt = ""/>
                    <img className = "absolute bottom-6 left-6" src = "/media/heroPage/blueRing.svg" alt = ""/>
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
                <img className = "absolute left-0 top-0" src = "/media/heroPage/leftWaves.svg" alt = ""/>
                <img className = "absolute right-0 top-0" src = "/media/heroPage/rightWaves.svg" alt = ""/>
            </div>
            <div className = "pt-40 flex flex-col items-center relative">
                <p className = "font-Black text-Black text-6xl pb-10 relative">
                    Акции и предложения
                    <img className = "absolute bottom-28 left-64" src = "/media/sales/blackBigStar.svg" alt = ""/>
                </p>
                <Cards/>
                <img className = "absolute left-0 bottom-0" src = "/media/sales/blueCircle.svg" alt = ""/>
            </div>
            <div className = "pt-40 flex flex-col items-center relative">
                <p className = "font-Black text-Black text-6xl pb-10 relative">
                    Почему люди выбирают нас?
                    <img className = "absolute bottom-28 right-[400px]" src = "/media/advantages/bigTransStar.svg" alt = ""/>
                </p>
                <Advantages/>
                <img className = "absolute right-0 bottom-0" src = "/media/advantages/blueCircle.svg" alt = ""/>
            </div>
            <div className = "py-40 flex flex-col items-center relative">
                <p className = "font-Black text-Black text-6xl pb-10 relative">
                    Свяжитесь с нами!
                    <img className = "absolute bottom-28 right-56" src = "/media/form/bigBlackStar.svg" alt = ""/>
                </p>
                <Form/>
                <img className = "absolute left-52 top-36" src = "/media/form/blackCircle.svg" alt = ""/>
                <img className = "absolute right-56 bottom-20" src = "/media/form/blueRing.svg" alt = ""/>
            </div>
        </main>
    );
}

export default Main;