import { db } from '../firebase/config'
import { useEffect, useState } from 'react'
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 updateProfile,
 signOut
} from "firebase/auth"

export const useAuthentication = () => {

    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [cancelled, setCancelled] = useState("")

    const auth = getAuth();

    //CLEAN MEMORY
    const checkIfIsCancelled = () => {
        if (cancelled) {
            return
        }
    }

    //CREATE USER
    const CreateUser = async (data) => {

        checkIfIsCancelled()

        setLoading(true)

        try {
            const { User } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            User = await updateProfile(User, {
                displayName: data.displayName
            }
            )
            
        } catch (error) {
            console.log("Houve um erro")
            setError(error.message)
        }

        setLoading(false)
    }

    const login = async (data) => {
        checkIfIsCancelled();
        setLoading(true)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            
            let systemErrorMessage;

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } 

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    //logout - signOut
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)
    }
     
        useEffect(() => {
            return () => setCancelled(true)
        }, [])

        return {
            CreateUser,
            loading,
            error, 
            auth,
            logout,
            login
        };
    };



    //SIGN


    //SIGNOUT
