import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

export const Register = () => {

    const [registerData, setRegisterData] = useState({ name: '', mobile: '', email: '', password: '' })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }


    const registerSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterData({
            ...registerData,
            [name]: value
        })

    };

    return (
        <>
            <h6 className="mb-4 text-[18px] text-[#424242] font-medium flex">
                <Link to={'/login'}><ChevronLeftIcon className="h-6" /></Link>
                <span>Register</span>
            </h6>
            <form className="flex flex-col" onSubmit={handleSubmit(registerSubmit)}>
                <div>
                    <label className="form-label" htmlFor="name" >Full Name</label>
                    <input {...register('name', { required: true, maxLength: 30 })} onChange={handleChange} id="name" value={registerData.name} type="email" className="input-field" placeholder="Enter your Full Name" />
                    {errors.name && <p className="text-[12px] text-red-600">Please enter your full name</p>}
                </div>
                <div className="mt-2">
                    <label className="form-label" htmlFor="mobile" >Mobile Number</label>
                    <input {...register('mobile', { required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, minLength: 10, maxLength: 10 })} onChange={handleChange} id="mobile" value={registerData.mobile} type="email" className="input-field" placeholder="Enter your Mobile Number" />
                    <p className="text-[12px]">OTP will be sent on this Mobile No. for verification.</p>
                    {errors.mobile && <p className="text-[12px] text-red-600">Please enter your Mobile Number</p>}
                </div>
                <div className="mt-2">
                    <label className="form-label" htmlFor="email" >Email ID</label>
                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} onChange={handleChange} id="email" value={registerData.email} type="email" className="input-field" placeholder="Enter your Email ID" />
                    {errors.email && <p className="text-[12px] text-red-600">Please enter your Email ID</p>}
                </div>
                <div >
                    <label className="form-label" htmlFor="password" >Password</label>
                    <div className="relative">
                        <input {...register('password', { required: true, minLength: 6 })} type={isPasswordVisible ? "text" : "password"} onChange={handleChange} id="password" value={registerData.password} placeholder="Enter your Password" className="input-field" />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? <EyeIcon className="h-5 text-gray-500" /> : <EyeSlashIcon className="h-5 text-gray-500" />}
                        </button>
                    </div>
                    <p className="text-[12px]">Password must be at least 8 characters long with 1 Uppercase, 1 Lowercase & 1 Numeric character.</p>
                    {errors.password && <p className="text-[12px] text-red-600"> Please enter valid Password</p>}
                </div>


                <button className="px-5 py-3 text-white bg-primary rounded mt-[35px] mb-4 font-medium" type="submit">CONTINUE</button>
            </form>
        </>
    )
}