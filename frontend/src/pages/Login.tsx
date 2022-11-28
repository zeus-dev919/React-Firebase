import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../actions";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import '../style/user/signup.css';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbf2d9erjDuQjlicdZkro5ccisCcK9oA",
  authDomain: "cake-system-9351f.firebaseapp.com",
  projectId: "cake-system-9351f",
  storageBucket: "cake-system-9351f.appspot.com",
  messagingSenderId: "14595692277",
  appId: "1:14595692277:web:f68039679ca4becbe117bc",
  measurementId: "G-SX34GFW0G9"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleSignIn = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        //Google Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(allActions.userActions.userLogin(user.displayName));
        navigate('/');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (

<div className='signup'>
            <div className='signup-container'>
                <div className='account-form-wrapper'>
                    <div className='account-logo'></div>
                    <div className='account-content'>
                        <div className="wallet-button" onClick={googleSignIn}>
                            <img src="https://img.icons8.com/color/30/null/google-logo.png" style={{padding:'10px'}}/>
                            <div className='wallet-text font-18-medium'>Googleでログイン</div>
                        </div>
                        <div className="input-container">
                            <PersonIcon className="icon"/>
                            <input className="input-field" type="text" placeholder="Email" name="name"  required />
                        </div>
                        <div className="input-container">
                          <KeyIcon className="icon"/>
                            <input className="input-field" type="password" placeholder="Password" name="password"  required />
                        </div>
                        <div className="font-16-medium">続行すると、利用規約とプライバシーポリシーに同意したことになります。</div>
                        <div className='cmn-btn font-18-bold' >メールでログイン</div>
                    </div>
                </div>
                <div className='account-type-wrapper'>
                    <div className="text-base">Welcome to Our shop</div>
                    <div className="text-white">Sign in your Account.</div>
                    <div className="row-content">
                        <div className="text-white">Don't you have Account yet? </div>
                        <div className="link-text" onClick={() => navigate('/signup')}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div> 
  )
}

export default Login;