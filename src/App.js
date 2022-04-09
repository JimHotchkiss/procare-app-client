import { useState, useEffect } from 'react';
import './App.css';
import { GiAutoRepair } from "react-icons/gi"
import { MdQueuePlayNext } from "react-icons/md"
import Sidebar from './components/sidebar/Sidebar';
import ContentBody from './components/content/ContentBody';
import ContentBtn from './components/content/ContentBtn';
import BarGraph from './components/graph/BarGraph';



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
  }




  return (
    <div className='h-[2000px] bg-primary flex'>
      <Sidebar 
        btnCondition={graphToggle}
        btnFunction={graphToggleHandler}
      />
      <ContentBody 
        graphToggle={graphToggle}
      />

      <ContentBtn 
        btnCondition={timerActive}
        btnFunction={timerHandler}
        startIcon={<GiAutoRepair size={40}/>}
        stopIcon={<MdQueuePlayNext size={40}/>}
      />

      {/* {graphToggle ? <BarGraph /> : null} */}
      
    </div>
  );
}

export default App;
