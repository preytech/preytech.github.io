function Cards()
{
    return <Card priceNoDiscount = "2105" priceDiscount = "2104" name = "Мини-членики" desc = "Бюджетный вариант для ценителей толстых членов!"/>
}

function Card({priceNoDiscount, priceDiscount, name, desc})
{
    const formatter = new 
        Intl.NumberFormat("ru-RU", { 
            style: "currency",
            currency: "RUB",
        });

    return(
        <div className = "border border-Trans20 rounded-xl w-[300px] p-5">
            <div className = "flex font-Bold justify-end gap-5 text-lg">
                <p className = "line-through text-Gray2 decoration-Gray2">{formatter.format(priceNoDiscount)}</p>
                <p className = "text-Blue">{formatter.format(priceDiscount)}</p>
            </div>
            <div className = "justify-center">
                <p className = "font-Bold text-xl text-center pb-4">{name}</p>
                <p className = "font-Light text-Gray3 text-xs border-b border-Trans20 pb-2.5">{desc}</p>
            </div>
            <ol className = "font-Light text-Gray3 list-image-[url(./images/checkIcon.svg)] ml-10 py-5 text-sm">
                <li>Письки до 10см!</li>
                <li>7-8 штук</li>
                <li>2 яйца</li>
            </ol>
            <div className = "w-full flex justify-center">
                <button className = "border-2 border-Blue py-1 px-16 rounded-lg">
                    <p className = "font-Bold text-xl">Запись</p>
                </button>
            </div>
        </div>
    );
}


export default Cards;