import { AiFillFacebook } from 'react-icons/ai';
import { fbSignInFirebase ,} from '../../config/firebase-config'
import { useNavigate } from 'react-router-dom';
export default function LogIn() {
    const navigate = useNavigate()
    const signInWithFb = async () => {
        try {
            await fbSignInFirebase()
            alert("logIn sucessful")
            navigate("/home")
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <button onClick={signInWithFb} className="fb_btn"> <AiFillFacebook className='fb_icon' /><span>SignIn With Facebook</span></button>
    )
    }

