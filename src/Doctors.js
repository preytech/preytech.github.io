import { CustomH } from "./components/lilcoms";
import { InputForm } from "./components/form";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
    {
        name: "Александр Багдасаров",
        photo: "",
        desc: "Ведущий хирург-имплантолог Санкт-Петербурга, имеет 18-летний опыт работы в области восстановления зубов. Он специализируется на различных методах восстановления, включая классическую имплантацию, одномоментную имплантацию, восстановление зубов за один день и костную пластику. Багдасаров успешно провёл более 4000 операций и постоянно совершенствует свои навыки, повышая квалификацию и участвуя в международных конференциях."
    },
    {
        name: "Леван Шария",
        photo: "",
        desc: "Стоматолог-хирург и имплантолог с 15-летним опытом, специализируется на сложных случаях имплантации. Он владеет уникальными методами All-on-4 и All-on-6, позволяющими восстановить все зубы всего за один день. В его арсенале также процедуры костной пластики, трансплантации костной ткани, подсадки костных блоков и синус-лифтинг."
    },
    {
        name: "Вадим Сумин",
        photo: "",
        desc: "Врач-стоматолог-ортопед с 21-летним опытом, специализируется на несъёмном протезировании. Он использует современные технологии и материалы для восстановления зубов, обеспечивая комфорт и эстетичный вид пациентам. Сумин предлагает различные виды несъёмных протезов, включая коронки, виниры и мостовидные протезы, а также проводит профессиональное отбеливание зубов."
    },
    {
        name: "Сниткова Ксения",
        photo: "",
        desc: "известный российский ортодонт с десятилетним опытом работы. Она специализируется на применении современных технологий несъёмной ортодонтической аппаратуры. Ксения Владимировна окончила Санкт-Петербургский государственный университет и ординатуру по специальности «Ортодонтия». Она регулярно повышает свою квалификацию и участвует в международных конференциях. Сниткова Ксения применяет инновационные методы лечения, такие как элайнеры Star Smile, которые позволяют исправить прикус и выровнять зубы без использования брекетов."
    },
    {
        name: "Беляева Екатерина",
        photo: "",
        desc: "Опытный врач-стоматолог с пятнадцатилетней практикой лечения кариеса всех степеней. Она специализируется на диагностике и лечении заболеваний зубов и дёсен, а также проводит профилактические мероприятия для предотвращения кариеса и других проблем полости рта."
    },
    {
        name: "Аверина Екатерина",
        photo: "",
        desc: "С томатолог с 10-летним опытом работы, специализирующийся на сложных случаях имплантации. Она обладает высокой квалификацией и успешно решает проблемы пациентов, связанные с отсутствием зубов и необходимостью восстановления функций жевания и речи."
    },
]

const reviews = [
    {
        profilePic: "",
        name: "Альберт Энштейн",
        text: "ыыыыыыуууууууооооооаааааа",
        starCount: 4
    },
    {
        profilePic: "",
        name: "Джо Байден",
        text: "Круто, но не понял за что 5 тыщ отдал",
        starCount: 3
    },
    {
        profilePic: "",
        name: "Владимир Путин",
        text: "Не рекомендую",
        starCount: 5
    },
]

function Doctors()
{
    return(
        <div className = "bg-BgWhite relative">
            <div className = "container mx-auto py-28 flex flex-col items-center">
                <CustomH text = "Наши врачи" star = "/media/advantages/bigTransStar.svg"/>
                <SimpleSlider/>
                <p className = "font-Black text-3xl pt-14">Отзывы</p>
                <div className = "flex flex-col gap-8 py-10 w-1/2 ">
                    { reviews.map((elem, i) => { return <Review name = {elem.name} text = {elem.text} starCount = {elem.starCount} key = {i}/>; }) }
                </div>
                <CreateNewReview/>
            </div>
            <img className = "absolute bottom-52" src = "/media/doctors/blueCircle.svg" alt = ""/>
        </div>
    );
}

function SimpleSlider() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
    <div className = "w-full">
        <Slider {...settings}>
            { doctors.map((elem, i) => { return <DoctorCard name = {elem.name} photo = {elem.photo} desc = {elem.desc} key = {i}/>; }) }
        </Slider>
    </div>
    );
}

function DoctorCard({name, photo, desc})
{
    return(
        <div className = "flex border gap-10 border-Trans20 p-10 rounded-xl justify-between mx-4">
            <img className = "w-3/4" src = {photo ? photo : "/media/doctors/doctor0.svg"} alt = ""/>
            <div className = "flex flex-col gap-8 justify-center">
                <p className = "font-Bold text-6xl">{name}</p>
                <div className = "flex gap-2">
                    <img src = "/media/doctors/star.svg" alt = ""/>
                    <img src = "/media/doctors/star.svg" alt = ""/>
                    <img src = "/media/doctors/star.svg" alt = ""/>
                    <img src = "/media/doctors/star.svg" alt = ""/>
                    <img src = "/media/doctors/star.svg" alt = ""/>
                </div>
                <p className = "font-Light text-Gray3">{desc}</p>
            </div>
        </div>
    );
}

function Review({name, text, starCount})
{   
    let grayStars = 5 - starCount;
    let stars = [];

    while (starCount)
    {
        stars.push(<img src = "/media/doctors/star.svg" alt = ""/>);
        starCount--
    }

    while (grayStars)
    {
        stars.push(<img src = "/media/doctors/grayStar.svg" alt = ""/>);
        grayStars--
    }

    return(
        <div className = "p-4 border border-Trans20 rounded-xl">
            <div className = "flex flex-col gap-2">
                <p className = "text-xl font-Bold">{name}</p>
                <div className = "flex gap-2">
                    {stars}
                </div>
                <p className = "font-Light text-Gray3">{text}</p>
            </div>
        </div>
    );
}

function CreateNewReview()
{
    return(
        <div className = "border border-Trans20 rounded-xl w-1/2 p-10">
            <form className = "flex flex-col gap-8">
                <p className = "font-Black text-3xl">Оставте ваш отзыв!</p>
                <div className = "flex justify-between">
                    <InputForm text = "Почта" type = "email" placeText = "abc@gmail.com"/>
                    <InputForm text = "Имя" type = "text" placeText = "Олег"/>
                </div>
                <InputForm text = "Отзыв" type = "text" placeText = "Напишите ваш отзыв" w = "full"/>
                <input className = "self-center px-10 flex items-center py-2.5 font-Light bg-Blue rounded-md text-white" type = "submit"/>
            </form>
        </div>
    );
}

export default Doctors;