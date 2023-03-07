import { FC, ReactNode } from "react"
import { RiAddFill } from "react-icons/ri"
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom"

type CreateButton = {
  onClick: () => void
  color?: string
  hoverColor?: string
  children:string
}

export const CreateButton: FC<CreateButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, color, hoverColor, children,...rest }) => {
  const navigate = useNavigate();
  function handleClick() {
    console.log("a")
    navigate("/post");
  }
  return (
    <div style={{ float: "right" }}>
      <button {...rest} className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}