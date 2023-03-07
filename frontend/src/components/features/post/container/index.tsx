import { SearchButton } from "../../../ui/button/SearchButton"
<<<<<<< HEAD

export const PostContainer = () => {
    //ロジック apiで呼び出し
    return (
        //presenter コンポーネン
        <SearchButton onClick={() => console.log("Button clicked!")}>
        </SearchButton>
=======
import { PresenterContainer } from "../presenter/PresenterContainer"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormArea } from "../presenter/FormArea"
import axios from 'axios';

type Inputs = {
    userid: string
    password: string
}

export const PostContainer = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>()


    return (
        //presenter コンポーネント
        <PresenterContainer>
            <FormArea errors={errors} register={register} />
        </PresenterContainer>
>>>>>>> upstream/main
    )
}