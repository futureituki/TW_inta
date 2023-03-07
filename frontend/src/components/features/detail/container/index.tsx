import { FormArea } from "../presenter/FormArea"
import { PresenterContainer } from "../presenter/PresenterContainer"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
    userid:string 
    password:string
}

export const DetailContainer = () => {
    //ロジック apiで呼び出し
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>()
    
    return (
        //presenter コンポーネント
        <PresenterContainer>
            <FormArea errors={errors} register={register} />
        </PresenterContainer>
    )
}