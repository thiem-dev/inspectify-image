/* TODO - 
- show toast on img loads 
- save img to history
- render box around classification objects
- separate classificiation div names from the progress bar so it doesn't jump around
- add more toast types
- separate main content load and history content loading states
- put toastEvent component into a wrapper function + that return an element plus useffect? 
*/

import { useState, useEffect, useRef } from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import './App.css'
// import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'
import PageLoading from './components/Loading/PageLoading'
import ToastEvent from './components/ToastEvent';

function App() {
  const [history, setHistory] = useState([])
  const [pageLoading, setPageLoading] = useState(true)
  const [historyLoading, setHistoryLoading] = useState(true)
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const [userCaption, setUserCaption] = useState('')
  const [imageURL, setImageURL] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageExists, setImageExists] = useState(true)
  const [toastStatus, setToastStatus] = useState(true)
  const [toastText, setToastText] = useState('default')

  const imageRef = useRef()
  const urlInputRef = useRef()
  const userCaptionRef = useRef()

  const API_URL = `https://inspectify-image-server-dev.onrender.com`


  useEffect(() => {

    //on load history fetch
    const getHistory = async () => {
      try {
        const res = await fetch(`${API_URL}/api/history`)
        const data = await res.json()
        setHistory(data)
        setHistoryLoading(false)
      } catch (error) {
        console.log('something went wrong with getting history api')
        setHistoryLoading(false)
      }
    }

    const tfModelInit = () => {
      loadModel()
      setPageLoading(false)
      setToastStatus('success'); setToastText('model rendered');
    }

    tfModelInit()
    getHistory();
    // setHistory(sampleData)
  }, [])

  // display imageurl when image is focused from history
  useEffect(() => {
    if(imageURL){
      urlInputRef.current.value = imageURL
    }

  }, [imageURL])



// ------------------------------------------------- UTIL FUNCTIONS

  const loadModel = async () => {
    try{
      const model = await mobilenet.load()
      setModel(model)
    } catch (error){
      console.log(error)
    }
  }

  const postImage = async (caption) => {
      if(results){
      const imageObj = {
        caption: caption,
        class_categories: results,
        image_url: imageURL
      }

      console.log(imageObj)

      try {
        const res = await fetch(`${API_URL}/api/history`, {
          method: 'POST',
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(imageObj)
        })
            
          if(!res.ok){ throw new Error(`HTTP error! Status: ${res.status}`); }
          const data = await res.json();
          console.log(`POST success`, data)
          
          //set history and reset input values
          setHistory([imageObj, ...history])
          userCaptionRef.current.value = '';
          urlInputRef.current.value = ''
          setResults([])
          setImageURL(null)

        } catch(error){
          console.log(`problem with posting to api history: ${imageObj}`)
        } 
          
      } else {console.log(`image needs to be identified`)}
  }

  const identify = async () => {
    // urlInputRef.current.value=''
    const results = await model.classify(imageRef.current)
    setResults(results)
    console.log(results)
  }

  const handleImgLoad = (e) => {
    const isImgLoaded = e.target.naturalWidth > 0;

    if(isImgLoaded){
      setImageLoaded(true)
    } else {
      // set daisyui toast fail
      console.log('image url is invalid')
      setImageLoaded(false)
    }
  }
     
  const handleImgOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }


  // ----------------------------------------------- return React Components
  if(pageLoading){
    return (<PageLoading/>)
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
              identify={identify} urlInputRef={urlInputRef} handleImgOnChange={handleImgOnChange} 
              handleImgLoad={handleImgLoad} userCaptionRef={userCaptionRef} postImage={postImage}
              setUserCaption={setUserCaption}
            />
          </div>
          <div className="historybar-ctn container w-5/12 h-5/6 overflow-y-scroll">
            <HistoryBar history={history} setImageURL={setImageURL} historyLoading={historyLoading}/>
          </div>
        </div>{/* <! END MAIN HOLDER--> */}
       </div>{/* <! END MAIN BODY--> */}
    </>
  )
}

export default App
