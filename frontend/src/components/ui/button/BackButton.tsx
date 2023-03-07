import { FC, ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type BackButton = {
  onClick: () => void
  children: ReactNode
  color: string
  hoverColor?: string
}

export const BackButton: FC<BackButton> = ({ onClick, children, color, hoverColor }) => {
  const navigate = useNavigate();
  function handleClick() {
    // navigate("/another-page");特定のページに飛ぶ場合
    navigate(-1);
  }
  return (
    <div style={{ float: "left" }}>
      <button className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}