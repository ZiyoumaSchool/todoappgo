import { signInWithGoogle } from '../../service/firebase';
import '../../styles/Banner.css';
import logo from '../../assets/logo.png';

import '../../App.css';

const Login = () => {
  const title = "Todo|app"
    return (
    <div align="center">
       <div className="lmj-banner" align="center">
       <p align="center"><img src={logo} alt="ToDo-App" className='lmj-logo'/>
            <h2 className='lmj-title'>&nbsp;&nbsp;&nbsp;
                 {title}
            </h2>
      </p>          
        </div>
    
    <div align="center">
       <button className="button" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i>Connection via Google</button>
    </div>
    </div>
  )
}

export default Login;