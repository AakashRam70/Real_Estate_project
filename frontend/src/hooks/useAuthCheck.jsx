import { useAuth0 } from '@auth0/auth0-react'
import { toast } from 'react-toastify'

//auth content 
const useAuthCheck = () => {

    const { isAuthenticated } = useAuth0()
    const validateLogin = () => {
        if (!isAuthenticated) {
            toast.error("You must login to continue", { position: "botton-right" })
            return false;
        } else return true;
    }
    return (
        {
            validateLogin
        }
    )
}

export default useAuthCheck
