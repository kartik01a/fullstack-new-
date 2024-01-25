import { useForm } from "react-hook-form"
import styles from '../style/register.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch,useAppSelector } from '../store/store'
import {login, logout} from '../store/reducers/login'

interface IFormInput {
  name: string
  email: string
  password: string
}

const schema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().required("Email is a required field").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email format"
  ),
  password: yup.string().required("Password is a required field")
});

export default function Register() {

  const storeDispatch = useAppDispatch()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
      const userData:counter = {
        userStatus:"logged-in",
        name:data.name,
        email:data.email,
        password:data.password
      }
      storeDispatch(login(userData) )
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.lable}>First Name</label>
      <input className={styles.input} {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <label className={styles.lable}>Email</label>
      <input className={styles.input} {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

      <label className={styles.lable}>Password</label>
      <input className={styles.input} {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}

      <input className={styles.input2} type="submit" value="Register" />
    </form>
  )
}