import { useReducer } from 'react'
import {UserContext} from '../../context/User/UserContext'
import {UserReducer} from '../../context/User/UserReducer'

import axiosClient from "../../config/axios"


export const UserState = (props) => {

    const initialState = {
        user: {
            name: null,
            email: null,
        },
        authStatus: false,
        loading: true
    }

    const [globalState, dispatch] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {
        try {
            const res = await axiosClient.post("/user/create", dataForm)
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosClient.defaults.headers.common['x-auth-token'] = token
        } else {
            delete axiosClient.defaults.headers.common['x-auth-token']
        }
        try {
            const answer = await axiosClient.get("/user/verify-user")
            dispatch({
                type: "GET_USER",
                payload: answer.data.user
            })
        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR"
            })
        }
    }

    const loginUser = async (dataForm) => {
        try {
            const answer = await axiosClient.post("/user/login", dataForm)
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: answer.data
            })
        } catch (error) {
            dispatch({
                type: "LOGIN_ERROR"
            })
        }
    }

    const logoutUser = () => {
        dispatch({
            type: "LOGOUT_USER"
        })
    }

    const userSubmitForm = async (data) => {
        try {
            const res = await axiosClient.put("/user/update", data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider
            value={{
                user: globalState.user,
                authStatus: globalState.authStatus,
                loading: globalState.loading,
                registerUser,
                verifyingToken,
                loginUser,
                logoutUser,
                userSubmitForm
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;

