import { useState, useEffect, useRef } from 'react'
import './App.css'
import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'

function App() {
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    // const getHistory = async () => {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setHistory(data)
    //   setIsLoading(false)
    // }

    // getHistory();

    setHistory(sampleData)
  }, [])


  if(isLoading){
    <h1>Loading data</h1>
  }

  // TODO historybar
  return (
    // title bar
    <div className="main-container container">
      <MainContent/>
      <HistoryBar history={history}/>

    </div>
    


  )
}

export default App
