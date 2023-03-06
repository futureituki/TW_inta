import { SubmitHandler, useForm } from "react-hook-form"
import { FormArea } from "../presenter/FormArea"
import { PresenterContainer } from "../presenter/PresenterContainer"

type Inputs = {
  userid:string 
  password:string
}
export const LoginContainer = () => {
  //ロジック apiで呼び出し
  const { handleSubmit,register,formState:{errors} } = useForm<Inputs>()
  const submit:SubmitHandler<Inputs> = (data) => {
    //ログイン処理
    console.log('test',data)
  }
  return (
    //presenter コンポーネント
    <PresenterContainer>
    <form onSubmit={handleSubmit(submit)}>
      <FormArea errors={errors} register={register}/>
    </form>
    </PresenterContainer>
  )
}