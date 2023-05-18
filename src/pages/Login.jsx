import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../AppContext';

export const Login = () => {
    const Navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [error, setError] = useState(null);
    const { setUserData } = useContext(UserContext);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPhone(phone) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        if (login === '') {
            setError('Please enter your Email ID or Mobile No.');
        } else {
            setError(null);
            let users = JSON.parse(localStorage.getItem("users")) || []
            const email = users.some(user => user.email === login);
            let mobile = users.some((item) => item.mobile === login)

            if (email || mobile){
                setUserData(true)
                Navigate("/")
            }else{
                setError('user not exist')
            }
        }
    }

    const handleChange = event => {
        if (!(isValidEmail(event.target.value) || (isValidPhone(event.target.value)))) {
            setError('Email or Mobile is invalid');
        } else {
            setError(null);
        }
        setLogin(event.target.value);
    };

    return (
        <>
            <h6 className="mb-4 text-[18px] text-[#424242] font-medium">Login / Register</h6>
            <form className="flex flex-col" onSubmit={loginSubmit}>
                <label className="form-label" htmlFor="email">Email ID/Mobile No.</label>
                <input onChange={handleChange} id="email" value={login} type="text" className="input-field" placeholder="Enter your Email ID or Mobile No." />
                {error && <p className="text-[12px] text-red-600">{error}</p>}
                <button className="px-5 py-3 text-white bg-primary rounded mt-[35px] mb-4 font-medium " type="submit">CONTINUE</button>
            </form>

            <div className="border-b relative h-[12px]">
                <p className="text-center px-2 absolute top-0 left-[45%] bg-white font-medium">OR</p>
            </div>
            <div>
                <div className="mt-6">
                    <div className="flex border rounded-sm p-2 items-center justify-center gap-3 text-[13px] mb-3">
                        <img src="//cdn.fcglcdn.com/brainbees/images/n/login-signup-facebook.png" alt="facebook icon" className="h-5" />
                        <p>FACEBOOK</p>
                    </div>
                    <div className="flex border rounded-sm p-2 items-center justify-center gap-3 text-[13px] mb-3">
                        <img src="//cdn.fcglcdn.com/brainbees/images/n/login-signup-gmail.png" alt="facebook icon" className="h-5" />
                        <p>GOOGLE</p>
                    </div>
                </div>
                <div className="py-4">
                    <p className="text-center link-demo">New to FirstCry? <Link className="link" to={'/register'}>Register Here</Link></p>
                </div>
                <hr />
                <p className="agree-text mt-3">
                    By continuing, you agree to Firstcry's <Link className="link" style={{ fontSize: '12px !important', fontWeight: 'normal' }} to={'#'}>Conditions of Use <br className="hidden md:block" /> </Link> and <Link className="link" style={{ fontSize: '12px !important', fontWeight: 'normal' }} to={'#'}>Privacy Notice.</Link>
                </p>
            </div>
        </>
    );
};
