import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/Helper';

const Demo = () => {

    const [textNumber, setTextNumber] = useState("2");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    console.log("Component rendering!!")

    const primeNo = useMemo(() => {
        return findNthPrime(textNumber)
    },[textNumber]);

    const onHandleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    }

  return (
    <>
        <div className={`m-4 p-2 w-96 border border-black ${isDarkTheme ? 'bg-gray-500' : 'bg-gray-100'}`}>
            <div>
                <input 
                    className='border px-2 py-1 border-gray-600 w-72'
                    placeholder='Write your Number here..'
                    value={textNumber}
                    type='number' 
                    onChange={
                        (e) => {
                            setTextNumber(e.target.value);
                        } 
                    }
                />
                <button
                    className='border bg-gray-700 text-white px-2 py-1 mt-1'
                    onClick={() => onHandleThemeChange()}
                >
                    {isDarkTheme ? <p>Light Theme</p> : <p>Dark Theme</p>}
                </button>

                <p className='font-bold'>Prime No - {primeNo}</p>
            </div>
        </div>
    </>
  )
}

export default Demo