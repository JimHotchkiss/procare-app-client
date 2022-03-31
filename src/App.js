import { useState, useEffect } from 'react';
import './App.css';
import { GiAutoRepair } from "react-icons/gi"
import { MdQueuePlayNext } from "react-icons/md"
import { FcBarChart } from "react-icons/fc"
import { FaChartBar } from "react-icons/fa"
import Sidebar from './components/sidebar/Sidebar';
import ContentBtn from './components/content/ContentBtn';



function App() {
  const [timerActive, setTimerActive] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const [cycleTime, setCycleTime] = useState(0)
  const [graphToggle, setGraphToggle] = useState(false)

  useEffect(() => {
      let interval = null;
      if (timerActive) {
          interval = setInterval(() => {
              setSeconds(seconds => seconds + 1)
          }, 1000)
      } else if (!timerActive && seconds !== 0) {
          clearInterval(interval)
      }
      return () => clearInterval(interval)
  }, [timerActive, seconds])

  const timerHandler = () => {
    setCycleTime(seconds)
    setTimerActive(!timerActive)
    setSeconds(0)
  }

  const graphToggleHandler = () => {
    setGraphToggle(!graphToggle)
    alert(cycleTime)
  }




  return (
    <div className='h-[2000px] bg-primary flex'>
      <Sidebar />
      <ContentBtn 
        btnCondition={timerActive}
        btnFunction={timerHandler}
        startIcon={<GiAutoRepair size={40}/>}
        stopIcon={<MdQueuePlayNext size={40}/>}
      />
      <ContentBtn 
        btnCondition={graphToggle}
        btnFunction={graphToggleHandler}
        startIcon={<FaChartBar size={40}/>}
        stopIcon={<FcBarChart size={40}/>}
      />
    </div>
  );
}

export default App;
