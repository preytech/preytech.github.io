export function Button({text, font, isBlue, arrow})
{
  let styles = " border-Blue border rounded-md text-black";
  let gap = " gap-0"

  if (isBlue)
  {
    styles = " bg-Blue rounded-md text-white";
  }

  if (arrow)
  {
    gap = " gap-2"
  } 

  return(
        <button className = {"px-10 flex items-center py-2.5 font-" + font + styles + gap}>
          {text}
          <img src = {arrow} alt = ""/>
        </button>
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