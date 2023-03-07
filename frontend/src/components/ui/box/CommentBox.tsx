<<<<<<< HEAD
export const CommentBox = () => {
  return (
    <div></div>
=======
import { FC, ReactNode } from "react"

type Props = {
  children:ReactNode
  className?:string
}
export const CommentBox:FC<Props> = ({children, className}) => {
  return (
    <div className={['w-full mt-4 font-normal text-sm', className].join(' ')}>
      {children}
    </div>
>>>>>>> d2b76d88324c18a5526f692ee51fe0528b15d34c
  )
}