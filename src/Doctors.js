import { CustomH } from "./components/lilcoms";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const doctors = [
    {
        name: "Александр Багдасаров",
        photo: "/media/doctor1.webp",
        desc: "18 лет ежедневной практики всех методов восстановления зубов:"
    },
    {
        name: "Леван Шария",
        photo: "/media/doctor2.webp",
        desc: "15 лет ежедневной практики сложных случаев имплантации"
    },
    {
        name: "Вадим Сумин",
        photo: "/media/doctor3.webp",
        desc: "21 год ежедневной практики несъёмного протезирования:"
    },
    {
        name: "Сниткова Ксения",
        photo: "/media/doctor4.webp",
        desc: "10 лет ежедневной практики применения современных технологий несъёмной ортодонтической аппаратуры"
    },
    {
        name: "Беляева Екатерина",
        photo: "/media/doctor5.webp",
        desc: "15 лет ежедневной практики лечения кариеса всех степеней"
    },
    {
        name: "Аверина Екатерина",
        photo: "/media/doctor6.webp",
        desc: "10 лет ежедневной практики сложных случаев имплантации"
    },
]

function Doctors()
{
    return(
        <div className = "bg-BgWhite">
            <div className = "container mx-auto py-28 flex flex-col items-center">
                <CustomH text = "Наши врачи" star = "/media/advantages/bigTransStar.svg"/>
                <SimpleSlider />
            </div>
        </div>
    );
}

function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {/* { doctors.map((elem, i) => { return <DoctorCard name = {elem.name} photo = {elem.photo} desc = {elem.desc}/>; }) } */}
        <div>
            <p>1</p>
        </div>
        <div>
            <p>2</p>
        </div>
        <div>
            <p>3</p>
        </div>
        <div>
            <p>4</p>
        </div>
        <div>
            <p>5</p>
        </div>
      </Slider>
    );
}

function DoctorCard({name, photo, desc})
{
    return(
        <div className = "flex gap-8">
            <img src = {photo} alt = ""/>
            <div className = "flex flex-col gap-4">
                <p className = "font-Bold">{name}</p>
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

export default Doctors;