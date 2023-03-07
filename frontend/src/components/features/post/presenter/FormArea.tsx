import { FC } from "react"
import { BackButton } from "../../../ui/button/BackButton"
import { CreatePageButton } from "../../../ui/button/CreatePageButton"
import { TextField } from "../../../ui/field/TextField"
import { useForm, UseFormRegister, FieldErrors } from 'react-hook-form';
import { MovieBox } from "../../../ui/box/MovieBox";
import { CreateButton } from "../../../ui/button/CreateButton";

type Inputs = {
    userid: string
    password: string
}
type Props = {
    errors: FieldErrors<Inputs>
    register: UseFormRegister<Inputs>
    // userid: string
}
export const FormArea: FC<Props> = ({ errors, register }) => {
    return (
        <div>
            <BackButton onClick={() => console.log("Button clicked!")} color="bg-blue-200" hoverColor="gray-900">
                戻る
            </BackButton>
            {/* <CreateButton id={userid} type={"該当のtype"} color="bg-blue-200" hoverColor="gray-900">
                投稿
            </CreateButton> */}
            {/* <MovieBox></MovieBox> */}
            <h1>↑これをボタンにするか</h1>
            <h1>タグもつける必要がある</h1>
            <TextField type="text" id="time" placeholder="time" register={register}></TextField>
            <TextField type="text" id="komento" placeholder="komento" register={register}></TextField>
        </div>
    )
}