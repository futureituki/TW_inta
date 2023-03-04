import { FC, ReactNode } from "react"

type Props = {
  children:ReactNode
}
export const PresenterContainer:FC<Props> = ({children}) => {
  return (
    <div className="mt-14">
    <div className="grid place-items-center">
      <h1 className="text-gray-400 font-normal">ログイン</h1>
      {children}
    </div>
    </div>
  )
}