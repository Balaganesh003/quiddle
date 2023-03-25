import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Play = () => {
  const [otp, setOtp] = useState('');
  return (
    <div className="w-full h-screen bg-[#0c1324] text-black">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        // inputStyle={'otp-input'}
      />
    </div>
  );
};

export default Play;
