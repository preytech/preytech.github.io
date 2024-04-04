import Arrow from "./images/mainButtonArrow.svg";

export function BlueButton({text, font})
{
  return(
        <button className = {"bg-Blue py-2.5 px-10 rounded-md text-white font-" + font}>{text}</button>
  );
}

export function WhiteButton({text, font})
{
  return(
    <button className = {"border-Blue border rounded-lg px-6 py-1 flex items-center gap-2.5 text-black font-" + font}>
      {text}
      <img src = {Arrow} alt = ""/>
    </button>
  );
}