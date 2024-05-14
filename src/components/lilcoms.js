import { Link } from "react-router-dom";

export function Button({text, font, isBlue, arrow, link, hoverArrow})
{
    return(
        <Link to = {link}>
            <button className = {"px-10 flex items-center transition duration-150 rounded-md border-Blue border py-2.5 font-" + font 
            + (isBlue ? " bg-Blue  text-white  hover:border hover:bg-BgWhite hover:text-black" : "  bg-BgWhite text-black hover:bg-Blue hover:text-white")
            + (arrow ? " gap-2" : " gap-0")}>
                {text}
                {/* <div className = {"bg-[url(" + arrow + ")] w-[15px] h-[15px]"}></div> */}
                <img src = {arrow} alt = ""/>
            </button>
        </Link>
    );
}

export function Contacts({image, text})
{
    return(
        <div className = "flex gap-3">
            <img src = {image} alt = ""/>
            <p className = "font-Light">{text}</p>
        </div>
    );
}

export function CustomH({text, star})
{
    return(
        <p className = "font-Black text-Black text-6xl pb-10 relative text-center">
            {text}
            <img className = "absolute bottom-28  inset-x-2/4" src = {star} alt = ""/>
        </p>
    );
  
}

export function FormatterToRubbles({price})
{
    const formatter = new Intl.NumberFormat("ru-RU", { 
        style: "currency",
        currency: "RUB",
    });

    return formatter.format(price);
}