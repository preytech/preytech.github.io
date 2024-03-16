import Header from './header';
import './App.css';

function Main()
{
    return(
        <div className="bg-[#F9F9FA]">
            <Header />
            <p className = "container mx-auto text-[#888888] font-Light">Стоматологические услуги по бюджетным ценам</p>
            <div className = "container mx-auto flex flex-col gap-[40px]">
                <div className = "font-Black text-7xl flex flex-col gap-[30px]">
                    <p>Ваша улыбка -</p>
                    <p className = "text-Blue">наш приоритет</p>
                </div>
                <div className = "flex flex-col items-start gap-[20px] font-Light justify-center">
                    <button className = "bg-Blue text-white px-12 rounded-lg">
                        <p>Акции и</p>
                        <p>предложения</p> 
                    </button>
                    <button className = "border-Blue border rounded-lg px-6 py-1"><p className = "text-black">Подробнее</p></button>
                </div>
            </div>
        </div>
    );
}

export default Main;