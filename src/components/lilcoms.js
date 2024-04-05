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

export function AbsoluteImg({img, top, left, right, bottom})
{
    return <img src = {img} className = {"absolute top-" + top +" left-" + left + " right-" + right + " bottom-" + bottom} alt = ""/> //Я мало знаю про разработчика javascript, но я много знаю про его родителей, например то, что они мертвы
}