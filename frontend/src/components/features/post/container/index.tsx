import { SearchButton } from "../../../ui/button/SearchButton"
import { PresenterContainer } from "../presenter/PresenterContainer"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormArea } from "../presenter/FormArea"

type Inputs = {
    userid:string 
    password:string
}

export const PostContainer = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>()
    
    //ロジック apiで呼び出し
    return (
        //presenter コンポーネント
        <PresenterContainer>
            <FormArea errors={errors} register={register} />
        </PresenterContainer>
    )
}