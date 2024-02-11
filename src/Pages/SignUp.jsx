import React, { useState } from "react";

function Signup() {
	const [currentStep, setCurrentStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handlePrev = () => {
		setCurrentStep(currentStep - 1);
	};

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        alert(`Welcome ${firstName}! Your account has been created.`);
    }
	
	// Render the signup form
	return (
		<div className="flex justify-center items-center mt-16 mb-16">
			<div className='bg-white shadow-lg w-[30vw] h-[60vh] rounded-lg p-10'>
				<h2 className="mb-5 text-center font-black text-3xl text-blue-800 leading-8 font-sans">Signup</h2>
				<div className="mb-6 px-6 h-[60%]">
					{currentStep === 1 ? (
						<div className="">
							<label htmlFor="" className="text-base font-bold text-blue-700 "> 
								First Name <br />
								<input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} className="border border-2 w-[100%] rounded-md pl-2 text-base font-normal mb-6 mt-1 h-8" />
							</label>{" "}
							<br />
							<label htmlFor="" className="text-base font-bold text-blue-700 ">
								Last Name <br />
								<input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} className="border border-2 w-[100%] rounded-md pl-2 text-base font-normal mt-1 h-8" />
							</label>
						</div>
					) : currentStep === 2 ? (
						<div>
							<label htmlFor="" className="text-base font-bold text-blue-700 ">
								Phone no <br />
								<input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="border border-2 w-[100%] rounded-md pl-2 text-base font-normal mb-6 mt-1 h-8" />
							</label>{" "}
							<br />
							<label htmlFor="" className="text-base font-bold text-blue-700 mb-5">
								Email <br />
								<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border border-2 w-[100%] rounded-md pl-2 text-base font-normal mt-1 h-8" />
							</label>
						</div>
					) : currentStep === 3 ? (
						<div>
							<label htmlFor="" className="text-base font-bold text-blue-700 ">
								Password <br />
								<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border border-2 w-[100%] rounded-md pl-2 text-base font-normal mb-6 mt-1 h-8" />
							</label>
						</div>
					) : null}
				</div>
				<div className="px-6 flex flex-row justify-between">
					{currentStep > 1 && (
						<button onClick={handlePrev} className="border p-2 text-base font-semibold w-20 rounded-md bg-blue-700 text-white" >
							Previous
						</button>
					)}
					{currentStep < 3 && (
						<button onClick={handleNext} className="border p-2 text-base font-semibold w-14 rounded-md bg-blue-700 text-white">
							Next
						</button>
					)}
					{currentStep === 3 && (
						<button onClick={handleSubmit} className="border p-2 text-base font-semibold w-20 rounded-md bg-blue-700 text-white">
							Submit
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Signup;