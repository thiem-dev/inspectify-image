import { useState, useEffect, useRef } from 'react'
import './App.css'
import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'
import Loading from './components/Loading'

function App() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // const getHistory = async () => {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setHistory(data)
    //   setIsLoading(false)
    // }

    // getHistory();

    setHistory(sampleData)
    setLoading(false)
  }, [])


  if(loading){
    return (<Loading/>)
  }

  return (
    // title bar
    <div id="main-body" className="container flex flex-row w-full h-full  relative">
      <MainContent/>
      <HistoryBar history={history}/>

    </div>
    
  )
}

export default App
