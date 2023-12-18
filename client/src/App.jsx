/* TODO
- load history from DB
- show toast on img loads
- make toast disappear after 5s or click to clear
- click and img ref and focus changes 
- save img to history
- render box around classification objects
-
*/

import { useState, useEffect, useRef } from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import './App.css'
import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'
import Loading from './components/Loading'
import ToastEvent from './components/ToastEvent';

function App() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const [imageURL, setImageURL] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [toastStatus, setToastStatus] = useState(true)
  const [toastText, setToastText] = useState('default')

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
  }, [])

  useEffect(() => {
    //TODO if() handle if image actually loaded
    if(imageURL){
      setHistory([imageURL, ...history])
    }
  }, [imageURL])

  useEffect(() => {
    loadModel()
    setLoading(false)
  }, [])

  const loadModel = async () => {
    try{
      const model = await mobilenet.load()
      setModel(model)
    } catch (error){
      console.log(error)
    }
  }

  const identify = async () => {
    // textInputRef.current.value=''
    const results = await model.classify(imageRef.current)
    setResults(results)
    console.log(results)
  }

  const uploadImage = (e) => {
    const {files} = e.target
    if(files.length > 0){
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const handleImgLoad = (e) => {
    const isImgLoaded = e.target.naturalWidth > 0;

    if(isImgLoaded){
      setImageLoaded(isImgLoaded)
    } else {
      // set daisyui toast fail
      console.log('image url is invalid')
    }
  }

  // TODO rename to handleImgOnChange
  const handleOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }


  

  if(loading){
    return (<Loading/>)
  }


  //TODO styling the main layout
  return (
    <>
      <div id="main-body" className="container">
        <ToastEvent toastStatus={toastStatus} toastText={toastText}/>
        <div className="mainHolder container w-full h-full flex flex-row justify-evenly my-10 gap-4 overflow-hidden">
          <div className="w-7/12 h-5/6">
            <MainContent 
              imageURL={imageURL} imageRef={imageRef} results={results} 
              identify={identify} textInputRef={textInputRef} handleOnChange={handleOnChange} 
              handleImgLoad={handleImgLoad}
            />
          </div>
          <div className="historybar-ctn container w-5/12 h-5/6 overflow-y-scroll">
            <HistoryBar history={history}/>
          </div>
        </div>{/* <! END MAIN HOLDER--> */}
       </div>{/* <! END MAIN BODY--> */}
    </>
  )
}

export default App
