import React, { useState, useRef, useEffect } from 'react';

const PhoneOtpLogin = ({ length = 4, onchangeOtp ,verified}) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
          
        }
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (!value) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (index < length - 1 && value) {
            inputRefs.current[index + 1]?.focus();
        }
        
        onchangeOtp(newOtp.join(''));
    };

    const handleBackspace = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);

            if (index > 0 && !otp[index] && inputRefs.current[index - 1]) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleClick = (index) => {
        inputRefs.current[index]?.focus();

        if (index > 0 && !otp[index-1] ) {
            inputRefs.current[otp.indexOf("")].focus();
        }


        if(index < length -1 && !otp[index+1] ){
            inputRefs.current[otp.indexOf("")].focus();
        }

    };

    return (
        <section>
            <main className='text-center'>
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type='text' // Corrected: type should be 'text' for OTP input
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e, index)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        className={`w-14 h-14 border-[3px] mr-5 text-3xl text-medium rounded-lg
                          ${verified === null
                                ? 'border-gray-300'
                                : verified
                                ? 'border-green-500'
                                : 'border-red-500'}
                        text-center border-gray-300`}
                    />
                ))}
            </main>
        </section>
    );
};

export default PhoneOtpLogin;
