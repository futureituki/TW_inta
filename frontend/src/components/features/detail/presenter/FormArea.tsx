import { FC } from "react"
import { BackButton } from "../../../ui/button/BackButton"
import { CreatePageButton } from "../../../ui/button/CreatePageButton";
import { TextField } from "../../../ui/field/TextField"
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { MovieBox } from "../../../ui/box/MovieBox";
import { useNavigate } from "react-router-dom"

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
        <div>
            <BackButton onClick={() => console.log("Button clicked!")} color="bg-blue-200" hoverColor="gray-900">
                戻る
            </BackButton>
            <CreatePageButton onClick={() => console.log("Button clicked!")} color="bg-blue-200" hoverColor="gray-900">
            </CreatePageButton>
            {/* <MovieBox></MovieBox> */}
            <TextField type="text" id="time" placeholder="time" register={register}></TextField>
            <TextField type="text" id="komento" placeholder="komento" register={register}></TextField>
        </div>
    )
}