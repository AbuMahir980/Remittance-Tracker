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
		<div className="container">
			<h2 id="head">Signup</h2>
			<div>
				{currentStep === 1 ? (
					<div className="mini-container">
						<label htmlFor="">
							First Name <br />
							<input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="inputs" />
						</label>{" "}
						<br />
						<label htmlFor="">
							Last Name <br />
							<input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="inputs" />
						</label>
					</div>
				) : currentStep === 2 ? (
					<div className="mini-container">
						<label htmlFor="">
							Phone no <br />
							<input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="inputs" />
						</label>{" "}
						<br />
						<label htmlFor="">
							Email <br />
							<input type="email" value={email} onChange={e => setEmail(e.target.value)} className="inputs" />
						</label>
					</div>
				) : currentStep === 3 ? (
					<div className="mini-container">
						<label htmlFor="">
							Password <br />
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="inputs" />
						</label>
					</div>
				) : null}
			</div>

			<div>
				<div className="btn">
					{currentStep > 1 && (
						<button onClick={handlePrev} >
							Previous
						</button>
					)}
					{currentStep < 3 && (
						<button onClick={handleNext} >
							Next
						</button>
					)}
					{currentStep === 3 && (
						<button onClick={handleSubmit} >
							Submit
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Signup;