import { useState } from "react";
import { Button, Contacts, CustomH, FormatterToRubbles } from "./components/lilcoms";
import { InputForm } from "./components/form";

const listData = [
    {
        text: "Консультация стоматолога-терапевта",
        price: 1700
    },
    {
        text: "Консультация стоматолога-ортопеда",
        price: 1700
    },
    {
        text: "Консультация ортодонта (осмотр, жалобы, анамнез, назначение диагностических мероприятий, составление рекомендаций)",
        price: 1700
    },
    {
        text: "Консультация ортодонта с проведением планирования лечения и анализом диагностических данных",
        price: 4990
    },
    {
        text: "Консультация стоматолога-хирурга",
        price: 3500
    },
    {
        text: "Оценка состояния пародонта",
        price: 5970
    },
    {
        text: "Консультация пародонтолога",
        price: 1700
    },
    {
        text: "Консультация детского стоматолога",
        price: 1700
    },
    {
        text: "Консультация детского стоматолога-хирурга",
        price: 1700
    },
]

function Servise()
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
                    <input className = "px-10 flex items-center transition duration-150 border border-Blue py-2.5 font-Light bg-Blue rounded-md text-white hover:bg-white hover:text-black " type = "submit"/>
                </form>
                <p onClick = {closeModal} className = "cursor-pointer absolute top-0 right-4">x</p>
            </div>
        </div>

    return(
        <div className = "bg-BgWhite">
            <div className = "container mx-auto py-28 flex flex-col items-center gap-20">
                <CustomH text = "Конcультация у стоматолога" star="/media/advantages/bigTransStar.svg"/>
                <div className = "flex w-full justify-around items-center">
                    <p className = "font-Light text-Gray3 text-xl w-[650px]">Консультация у стоматолога — это первый шаг к здоровью вашей улыбки. Во время консультации врач-стоматолог уточняет жалобы пациента, проводит диагностику полости рта и составляет план лечения. Это помогает врачу подобрать оптимальные методы лечения, учитывая индивидуальные особенности пациента и его пожелания. <br/>Консультация у стоматолога — это возможность для пациента получить профессиональную помощь и рекомендации от опытного специалиста. Во время консультации стоматолог изучает состояние зубов и дёсен пациента, определяет наличие кариеса, заболеваний пародонта и других проблем. Врач также может предложить различные методы профилактики и гигиены полости рта, а также порекомендовать средства для ухода за зубами и дёснами.</p>
                    <img className = "w-[450px] h-[450px]" src = "/media/servise/doctor.webp" alt = ""/>
                </div>
                <div className = "border border-Trans20 rounded-xl p-4 flex justify-between items-end w-2/3">
                    <div className = "bg-Blue rounded-xl p-2 text-white flex flex-col gap-4 pr-20">
                        <Contacts image = "/media/contacts/phone.svg" text = "8 800 555 35 35"/>
                        <Contacts image = "/media/contacts/mail.svg" text = "abc@gmail.com"/>
                        <Contacts image = "/media/contacts/geo.svg" text = "Руставели 33, Санкт-Петербург"/>
                    </div>
                    <div onClick = {openModal} className = "pb-6 pr-10">
                        <Button text = "Запись" font = "Bold" isBlue = "yes"/>
                    </div>
                </div>
                <div className = "font-Light text-xl text-Gray3 flex flex-col gap-4 border border-Trans20 rounded-xl py-6 w-2/3">
                    {listData.map((elem, i) => {return <ListElem text = {elem.text} price = {elem.price} key = {i} i = {i}/>})}
                </div>
            </div>
            {isOpened ? modal : ""}  
        </div>
    );
}

function ListElem({text, price, i})
{
    return(
        <div className = {"flex justify-between items-center font-Light py-2 px-6 text-xl text-Gray3 " + (i % 2 === 0 ? "text-Gray3": "text-white bg-Gray")}>
            <p className = "w-[700px]">{text}</p>
            <p><FormatterToRubbles price = {price}/></p>
            
        </div>
    );
}

export default Servise;