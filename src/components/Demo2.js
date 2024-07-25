import React, { useRef, useState } from 'react'

const Demo2 = () => {

    let x = 10;

    const [y, setY] = useState(20);

    const z = useRef(30);

    const onHandleClickX = () => {
        x = x+1;
        console.log(x);
    }

    const onHandleClickY = () => {
        setY(y + 1)
        console.log(y);
    }

    const onHandleClickZ = () => {
        z.current = z.current + 1;
        console.log(z.current);
    }

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <ul className='mb-1'>
            <li>- x implies declaration with let</li>
            <li>- y implies declaration with useState</li>
            <li>- z implies declaration with useRef</li>
        </ul>
        <hr className='border border-gray-700' />
        <div className='mt-2'>
            Let variable x = <span className='font-bold'>{x}</span>
            <button
                className='ml-4 border border-gray-700 px-2 bg-white'
                onClick={() => onHandleClickX()}
            >
                Increase x
            </button>
        </div>
        <div className='mt-2'>
            Let variable y = <span className='font-bold'>{y}</span>
            <button
                className='ml-4 border border-gray-700 px-2 bg-white'
                onClick={() => onHandleClickY()}
            >
                Increase y
            </button>
        </div>
        <div className='mt-2'>
            Let variable z = <span className='font-bold'>{z.current}</span>
            <button
                className='ml-4 border border-gray-700 px-2 bg-white'
                onClick={() => onHandleClickZ()}
            >
                Increase z
            </button>
        </div>
    </div>
  )
}

export default Demo2