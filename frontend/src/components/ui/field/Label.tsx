import { FC, ReactNode } from "react"

type Props = {
  htmlFor:string
  children:ReactNode
}
export const Label:FC<Props> = ({htmlFor, children}) => {
  return (
    <label className="block text-blue-700 text-sm font-normal mb-2" htmlFor={htmlFor}>
      {children}
    </label>
  )
}