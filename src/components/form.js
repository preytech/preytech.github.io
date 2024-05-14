import { Contacts } from "./lilcoms";

function Form()
{
    return(
        <div className = "border border-Trans20 bg-white rounded-xl flex p-2 z-10"> 
            <div className = "bg-Blue rounded-xl p-8 w-[550px] flex flex-col gap-80 relative">
                <div className = "font-Light text-white flex flex-col gap-10">
                    <p className = "text-4xl">Контактная информация</p>
                    <Contacts image = "/media/contacts/phone.svg" text = "8 800 555 35 35"/>
                    <Contacts image = "/media/contacts/mail.svg" text = "abc@gmail.com"/>
                    <Contacts image = "/media/contacts/geo.svg" text = "Руставели 33, Санкт-Петербург"/>
                </div>
                <div className = "flex gap-4 z-10">
                    <img src = "/media/contacts/twitter.svg" alt = ""/>
                    <img src = "/media/contacts/instagram.svg" alt = ""/>
                    <img src = "/media/contacts/discord.svg" alt = ""/>
                </div>
                <img className = "absolute bottom-0 w-max" src = "/media/form/megaWaves.svg" alt = ""/>
            </div>
            <form className = "p-4 flex flex-col justify-center gap-52 items-center">
                <div>
                    <div className = "grid grid-cols-2 grid-rows-2 gap-8 pb-8">
                        <InputForm text = "Имя" type = "text" placeText = "Олег"/>
                        <InputForm text = "Фамилия" type = "text" placeText = "Иванов"/>
                        <InputForm text = "Почта" type = "email" placeText = "abc@gmail.com"/>
                        <InputForm text = "Номер телефона" type = "text" placeText = "8 800 555 35 35"/>
                    </div>
                    <InputForm text = "Сообщение" type = "text" placeText = "Напишите ваше сообщение" w = "full"/>
                </div>
                <input className = "px-10 flex items-center transition duration-150 border border-Blue py-2.5 font-Light bg-Blue rounded-md text-white hover:bg-white hover:text-black " type = "submit"/>
            </form>
        </div>
    );
}

export function InputForm({text, type, placeText, w})
{
    return(
        <div className = "flex flex-col gap-2">
            <label>{text}</label>
            <input className = {"border border-Trans20 w-" + (w ? w : "72") + " h-10 rounded-md placeholder:font-Light placeholder:text-Gray3 placeholder:pl-2"} type = {type} placeholder = {placeText} />
        </div>
    );
}

export default Form;