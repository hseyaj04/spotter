import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Logo from '../components/Logo.jsx';
import Check from '../../../assets/check.png';
const ScannerPage = (props) => {
  const [data, setData] = useState("Not Found");
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (isScanned) {
      navigate('/final');
    }
  };

  return (
    <div className={`p-3 bg-white min-h-screen flex flex-col`}>
      <div className='flex flex-col items-start'>
        <Logo />
      </div>
      
      <div className={`${isScanned ? 'bg-[#CDEEC8]' : 'bg-[#B8A7FF]'} bg-opacity-40 rounded-2xl px-10 py-8 h-auto flex flex-col items-center mt-5'`}>
        {!isScanned && (
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setIsScanned(true); // Scanner stops here as component unmounts
              }
            }}
          />
        )}
        {isScanned && (
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center p-5 w-full bg-[#75C667] rounded-3xl'>
              <img className='h-30' src={Check} alt="" />
              <h2 className='mt-5 font-semibold text-lg'>Scanned Successfully</h2>
            </div>
            <p className='text-lg text-gray-700 m-2'>{data}</p>
          </div>
        )}
        <div className='mt-4 w-full flex flex-col items-center'>
          <button
            onClick={handleProceed}
            disabled={!isScanned}
            className={`text-white text-xl w-full py-3 rounded-4xl ${
              isScanned ? 'bg-[#225029]' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ScannerPage;