import { FC, ReactNode } from "react"
import { RiAddFill } from "react-icons/ri"
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom"

type CreatePageButton = {
  onClick: () => void
  color?: string
  hoverColor?: string
}

export const CreatePageButton: FC<CreatePageButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, color, hoverColor, ...rest }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/post");
  }
  return (
    <div style={{ float: "right" }}>
      <button {...rest} className={`${color} hover:${hoverColor} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={handleClick}>
        <RiAddFill color = "white"/>
      </button>
    </div>
  )
}