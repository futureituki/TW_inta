import { FC } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Label } from "../../../ui/field/Label"
import { TextField } from "../../../ui/field/TextField"
import { Button } from "../../../ui/button/Button"

type Inputs = {
  userid: string
  password: string
}
type Props = {
  errors: FieldErrors<Inputs>
  register: UseFormRegister<Inputs>
}
export const FormArea: FC<Props> = ({ errors, register }) => {
  return (
    <div className="mt-10">
      <div className="w-72 mt-5">
        <Label htmlFor="userid">ID</Label>
        <TextField type="text" id="userid" placeholder="ID" register={register} />
        {errors.userid && <span className="font-normal text-red-500 mt-4">エラー</span>}
      </div>
      <div className="w-72 mt-5">
        <Label htmlFor="password">Password</Label>
        <TextField type="password" id="password" placeholder="Password" register={register} />
        {errors.password && <span className="font-normal text-red-500 mt-4">エラー</span>}
      </div>
      <div className="w-36 mt-4">
        <Button onClick={() => console.log("Button clicked!")} color="bg-blue-200" hoverColor="gray-900">
          login!
        </Button>
      </div>
    </div>
  )
}