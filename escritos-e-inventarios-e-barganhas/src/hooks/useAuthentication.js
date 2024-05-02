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
            logout
        };
    };



    //SIGN


    //SIGNOUT
