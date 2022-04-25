import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ContentBody from './components/content/ContentBody';
import Navigation from './components/navigation/Navigation';




function App() {
  const [steps, setSteps] = useState([])
  const [loading, setLoading] = useState(false)
  const [instruction, setInstruction] = useState({})
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
    setLoading(true)
    fetch(url + 'instructions/1')
      .then(response => response.json())
      .then(data => setInstruction(data))
      .catch(error => console.log(error))
      .finally(setLoading(false))

  }, [])

  const timerHandler = () => {
    setCycleTime(seconds)
    setTimerActive(!timerActive)
    setSeconds(0)
  }

  const graphToggleHandler = () => {
    setGraphToggle(!graphToggle)
  }

  const stepHandler = e => {
    let repairId = e.target.id 
    fetch(url + `repairs/${repairId}`)
      .then(response => response.json())
      .then(data => setSteps(data.steps))
  }




  return (
    <div className="flex">
      <div> 
        {console.log('App', steps)}
        <Sidebar 
          btnCondition={graphToggle}
          btnFunction={graphToggleHandler}
        />
      </div>
      <div className='flex justify-items-center align-center w-full bg-primary'> 
        <ContentBody 
          instruction = {instruction}
          loading = {loading}
          graphToggle={graphToggle}
          stepHandler={stepHandler}
        />
      </div>
      <div> 
        <Navigation />
      </div>
    </div>
  );
}

export default App;
