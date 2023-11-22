import { useState, useContext } from "react";
import { loginService, signupService } from "../services/user";
import { UserContext } from "../context/User/UserContext";

export const Login = () => {
    const [isMember, setIsMember] = useState(false);
    const {token,setToken} = useContext(UserContext)

const onSubmit = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const dataObject = Object.fromEntries(formData)
    console.log(dataObject)

    if (isMember) {
        const userData= await loginService(dataObject)
        console.log(userData)
        setToken(userData.token)
    } else {
        const userData= await signupService(dataObject)
    }
}
  return (
   <section>
    <p>{token}</p>
    <form onSubmit={onSubmit}>
        <h3>{isMember ? "Login": "Register"}</h3>
            {!isMember && (
                    <div>
                    <label htmlFor="firstName"> Name </label>
                    <input id="firstName" type="text" name="firstName" />
                    </div>
                )}
        <div>
            <label htmlFor="email"> Email </label>
            <input type="email" name="email" id="email"/>
        </div>
        <div>
            <label htmlFor="password"> Password </label>
            <input type="password" name="password" id="password" />
        </div>
        <button type="submit"> Submit</button>
        <p>
            {isMember ? "Not a member yet?": "Already a member?"}
            <button type="button" onClick={() => setIsMember(!isMember)}> {isMember?"Register": "Login"} </button>
        </p>
        </form>
        </section>
    );
}
