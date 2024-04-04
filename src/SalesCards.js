import WhiteMicroStar from "./images/whiteMicroStar1.svg";

import { WhiteButton } from "./components";

function Cards()
{
    return (
        <div className = "flex justify-center items-end gap-14">
            <Card
                priceNoDiscount = "2999"
                priceDiscount = "2399"
                name = "Скидка  на первое посещение клиники"
                desc = "Все лечение проводится при помощи бинокуляров или дентального микроскопа"
                list1 = "Консультация стоматолога"
                list2 = "Лечение кариеса одного зуба, либо удаление одного зуба"
                list3 = "Лечение высококачественным оборудованием"
            />
            <Card
                priceNoDiscount = "2999"
                priceDiscount = "1499"
                name = "Профессиональная диагностика полости рта"
                desc = "Помимо ежедневной чистки зубов она заключается в своевременном выявлении заболевания"
                list1 = "Осмотр ротовой полости стоматологом"
                list2 = "3D цифровая рентгенодиагностика (КТ)"
                list3 = "Профессиональная гигиена полости рта AIR Flow"
                isBlue = "ss"
            />
            <Card
                priceNoDiscount = "7999"
                priceDiscount = "4799"
                name = "Лечение кариеса под увеличением"
                desc = "Наши стоматологи спасают 90% зубов, которые рекомендовали удалить в других клиниках"
                list1 = "Терапевты используют изоляцию зубов при помощи коффердама"
                list2 = "Пломбировочные материалы последнего поколения"
                list3 = "Терапевт лечит кариес, пульпит, периодонтитции"
            />
        </div>
    );
}

function Card({priceNoDiscount, priceDiscount, name, desc, list1, list2, list3, isBlue})
{
    const formatter = new 
        Intl.NumberFormat("ru-RU", { 
            style: "currency",
            currency: "RUB",
        });

    let blueBlock;
    if (isBlue)
    {
        blueBlock = <div className = "bg-Blue text-white font-Bold rounded-xl text-2xl text-center relative w-full py-2.5">
            Лучшая цена!
            <img src = {WhiteMicroStar} alt = "" className = "absolute"/>
        </div>
    }

    return(
        <div className = "border border-Trans20 rounded-xl">
            <div>
                {blueBlock}
            </div>
            <div className = "p-6">
                <div className = "flex font-Bold justify-end gap-5 text-lg">
                    <p className = "line-through text-Gray2 decoration-Gray2">{formatter.format(priceNoDiscount)}</p>
                    <p className = "text-Blue">{formatter.format(priceDiscount)}</p>
                </div>
                <div className = "flex flex-col gap-2 justify-center w-72">
                    <p className = "font-Bold text-2xl text-center">{name}</p>
                    <p className = "font-Light text-Gray3 text-sm border-b border-Trans20 pb-2.5">{desc}</p>
                </div>
                <ol className = "font-Light text-Gray3 list-image-[url(./images/checkIcon.svg)] ml-10 py-6 text-sm w-60">
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                </ol>
                <div className = "w-full flex justify-center">
                    <WhiteButton text = "Запись" font = "Bold"/>
                </div>
            </div>

        </div>
    );
}


export default Cards;