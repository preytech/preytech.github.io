import { Button, CustomH, FormatterToRubbles } from "./components/lilcoms";

const serviseData = [
    {
        name: "Лечение кариеса",
        price: 3000,
        image: "/media/servise/teeth1.webp"
    },
    {
        name: "Лечение каналов (осложнение кариеса)",
        price: 7000,
        image: "/media/servise/teeth2.webp"
    },
    {
        name: "Лечение некариозных поражений",
        price: 2800,
        image: "/media/servise/teeth3.webp"
    },
    {
        name: "Травмы зубов",
        price: 3000,
        image: "/media/servise/teeth4.webp"
    },
    {
        name: "Удаление зубов",
        price: 7000,
        image: "/media/servise/teeth5.webp"
    },
    {
        name: "Установка керамических вкладок",
        price: 2800,
        image: "/media/servise/teeth6.webp"
    }
]

function Servises()
{
    return(
        <div className = "bg-BgWhite  relative">
            <div className = "container mx-auto py-28 flex flex-col items-center gap-4">
                <CustomH text = "Наши услуги" star = "/media/sales/blackBigStar.svg"/>
                <div className = "grid grid-cols-3 grid-rows-2 gap-20 z-10">
                    {serviseData.map((elem, i) => { return <Servise name = {elem.name} price = {elem.price} image = {elem.image} key = {i}/> })}
                </div>
            </div>
            <img className = "absolute left-0 top-64" src = "/media/servise/blueLittleCircle.svg" alt = ""/>
            <img className = "absolute right-0 bottom-96" src = "/media/servise/blueMediumCircle.svg" alt = ""/>
        </div>
    );
}

function Servise({name, price, image})
{
    return(
        <div className = "flex flex-col items-center gap-4 z-10">
            <p className = "font-Black text-2xl">{name}</p>
            <p className = "font-Light text-Gray3">от <FormatterToRubbles price = {price}/></p>
            <img className = "pb-8" src = {image} alt = ""/>
            <Button text = "Запись" font = "Bold" arrow = "/media/buttons/mainButtonArrow.svg"/>
        </div>
    );
}

export default Servises;