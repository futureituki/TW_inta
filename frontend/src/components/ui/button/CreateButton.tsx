import { FC, ReactNode } from "react"
import { RiAddFill } from "react-icons/ri"
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom"
import axios from "axios"

type CreateButtonProps = {
  onClick: () => void
  color?: string
  hoverColor?: string
  children: string
  id: string
}

export const CreateButton: FC<CreateButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, color, hoverColor, children, id, type, ...rest }) => {
 
  async function handleClick() {
    try {
        const response = await axios.post('http://localhost:80/Articles', { id, type });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div style={{ float: "right" }}>
      <button {...rest} className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={() => handleClick()}>
        {children}
      </button>
    </div>
  )
}

// import { FC, ReactNode } from "react"
// import { RiAddFill } from "react-icons/ri"
// import { IconContext } from "react-icons"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"

// type CreateButton = {
//   onClick: () => void
//   color?: string
//   hoverColor?: string
//   children: string
//   id:string
// }

// export const CreateButton: FC<CreateButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, color, hoverColor, children, id, type,...rest }) => {
 
//   function handleClick() {
//     try {
//         const response = await axios.post('http://localhost:80/Articles', { id, type });
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//   }

//   return (
//     <div style={{ float: "right" }}>
//       <button {...rest} className={`${color} hover:${hoverColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="button" onClick={() => handleClick()}>
//         {children}
//       </button>
//     </div>
//   )
// }
