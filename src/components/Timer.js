import {React, useState, useEffect} from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setSeconds(0)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])
  return (
    <div className= 'flex justify-center items-center flex-col h-screen bg-orange-300'>
        <div className='h-40 w-40 bg-purple-300 rounded-sm'>
            <p className='text-center mt-[45%]'>{seconds} S</p>
        </div>
        <div>
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 mr-2 rounded'
                onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 ml-2 rounded'
                onClick={reset}>Reset</button>
        </div>
    </div>
  )
}



export default Timer