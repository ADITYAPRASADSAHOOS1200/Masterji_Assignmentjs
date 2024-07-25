import React, { useState } from 'react';
import PhoneOtpLogin from './PhoneOtpLogin';

const Otp = () => {
    
    const verificationResult="1234"

    const [verified,setVerified]=useState(null)
    const[otp,setOtp]=useState('')
    

    // Function to handle OTP submission and verification
    const handleOtpSubmit = (value) => {
        console.log(value);
        setOtp(value)
    };

    console.log(otp === verificationResult);

    const handleVerification = () => {
        console.log('Comparing OTP:', otp === verificationResult);
        if (otp === verificationResult) {
            setVerified(true);
        } else {
            setVerified(false);
        }
    };





    return (
        <section className='min-h-screen flex items-center justify-center bg-[#3F72AF]'>
            <main className='container h-[300px] w-[400px] bg-slate-100 rounded-xl shadow-sm '>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold font-sans mt-4'>Mobile Phone Verification</h1>
                    <p className='text-slate-400 font-sans font-base p-4'>
                        Enter the 4 digit Verification code that was sent to your mobile number
                    </p>
                </div>
                {/* Pass handleOtpSubmit function as prop to PhoneOtpLogin */}
                <PhoneOtpLogin onchangeOtp={handleOtpSubmit} verified={verified} />
                {/* Display verification result */}
                <div className='text-center mt-5'>
                    <button 
                        className={`px-20 shadow-sm rounded-md py-2 text-xl font-base text-white 
                                    ${verified === null ? 'bg-[#10174e]' : (verified ? 'bg-green-500' : 'bg-red-500')}`}
                        onClick={handleVerification}
                    >
                        Verify
                    </button>
                    <p className='text-slate-400 font-sans font-base p-4'> didn't recive code ?<span className='text-[#10174e] font-semibold'>Resend</span>  </p>
                </div>
            </main>
        </section>
    );
};

export default Otp

