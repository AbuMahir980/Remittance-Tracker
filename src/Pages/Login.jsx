import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmail('');
        setPassword('');
        navigate('/dashboard') //replace will remove the history so when we click
    }
    return(
        <>
            <div className="flex justify-center items-center mt-16 mb-16">
                <div className='bg-white shadow-lg w-[30vw] h-[60vh] rounded-lg p-10'>
                    <h2 className="mb-5 text-center font-black text-3xl text-blue-800 leading-8 font-sans">Log In</h2>
                    <div className="mb-6 px-6 h-[60%]">
                        <label htmlFor="" className="text-base font-bold text-blue-700 mb-5">
								Email <br />
								<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className=" border-2 w-[100%] rounded-md pl-2 text-base font-normal mb-6 mt-1 h-8" />
						</label>
                        <label htmlFor="" className="text-base font-bold text-blue-700 ">
								Password <br />
								<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className=" border-2 w-[100%] rounded-md pl-2 text-base font-normal mt-1 h-8" />
							</label>
                    </div>
                    <div className="px-6 flex flex-row justify-center">
                        <input type="submit" onClick={handleSubmit} className="border p-2 text-base font-semibold w-[100%] rounded-md bg-blue-700 text-white" />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;