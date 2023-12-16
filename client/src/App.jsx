import { useState, useEffect, useRef } from 'react'
import './App.css'
import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'
import Loading from './components/Loading'

function App() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const [imageURL, setImageURL] = useState(null)

  const imageRef = useRef()
  const textInputRef = useRef()
  const fileInputRef = useRef()

  useEffect(() => {

    // const getHistory = async () => {
    //   const res = await fetch('')
    //   const data = await res.json()
    //   setHistory(data)
    //   setIsLoading(false)
    // }

    // getHistory();

    setHistory(sampleData)
    setImageURL('https://cdn.shopify.com/s/files/1/0317/9853/files/inspiring-christmas-tree-ideas-102538741_large.jpg?v=1481831458')
    setLoading(false)
  }, [])


  if(loading){
    return (<Loading/>)
  }


  //TODO styling the main layout
  return (
    // title bar
    <>
      <h1>Body</h1>
      <div id="main-body" className="container relative w-11/12 mx-auto">
        <div className="w-full">
          <h1>Title Holder</h1>
        </div>
        <div className="mainHolder container w-full h-full flex flex-row justify-evenly mx-auto my-10 gap-8">
          <MainContent imageURL={imageURL} imageRef={imageRef}/>
          <HistoryBar history={history}/>
        </div>
      </div>
    </>
  )
}

export default App
