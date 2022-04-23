import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ContentBody from './components/content/ContentBody';
import Navigation from './components/navigation/Navigation';




function App() {
  const [instructions, setInstructions] = useState()
  const [timerActive, setTimerActive] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [cycleTime, setCycleTime] = useState(0)
  const [graphToggle, setGraphToggle] = useState(false)
  const url = "http://localhost:3000/api/v1/"

  // useEffect(() => {
  //     let interval = null;
  //     if (timerActive) {
  //         interval = setInterval(() => {
  //             setSeconds(seconds => seconds + 1)
  //         }, 1000)
  //     } else if (!timerActive && seconds !== 0) {
  //         clearInterval(interval)
  //     }
  //     return () => clearInterval(interval)
  // }, [timerActive, seconds])

  useEffect(() => {
    fetch(url + 'instructions')
      .then(response => response.json())
      .then(data => console.log(data[0].repairs))

  }, [])

  const timerHandler = () => {
    setCycleTime(seconds)
    setTimerActive(!timerActive)
    setSeconds(0)
  }

  const graphToggleHandler = () => {
    setGraphToggle(!graphToggle)
  }




  return (
    <div className="flex">
      <div> 
        <Sidebar 
          btnCondition={graphToggle}
          btnFunction={graphToggleHandler}
        />
      </div>
      <div className='flex justify-items-center align-center w-full bg-primary'> 
        <ContentBody 
          graphToggle={graphToggle}
        />
      </div>
      <div> 
        <Navigation />
      </div>
    </div>
  );
}

export default App;
