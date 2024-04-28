import { Link } from "react-router-dom";

export function Button({text, font, isBlue, arrow, link})
{
    console.log(isBlue);
    console.log(arrow);
    return(
        <Link to = {link}>
            <button className = {"px-10 flex items-center py-2.5 font-" + font 
            + (isBlue ? " bg-Blue rounded-md text-white" : " border-Blue border bg-BgWhite rounded-md text-black")
            + (arrow ? " gap-2" : " gap-0")}>
                {text}
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
        <p className = "font-Black text-Black text-6xl pb-10 relative">
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