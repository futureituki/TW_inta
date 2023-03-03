import { FC } from "react"

type Field = {
  type:string
  placeholder:string
  id:string
}
export const TextField:FC<Field> = ({type, placeholder, id}) => {
  return (
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={id} type={type} placeholder={placeholder}/>
  )
}