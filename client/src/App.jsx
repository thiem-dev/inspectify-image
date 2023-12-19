/* TODO - 
- show toast on img loads 
- save img to history
- render box around classification objects
- separate classificiation div names from the progress bar so it doesn't jump around
- add more toast types
- separate main content load and history content loading states
*/

import { useState, useEffect, useRef } from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import './App.css'
import sampleData from './assets/sampleData.json'
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
  const [imageURL, setImageURL] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageExists, setImageExists] = useState(true)
  const [toastStatus, setToastStatus] = useState(true)
  const [toastText, setToastText] = useState('default')


  const imageRef = useRef()
  const urlInputRef = useRef()
  const userCaptionRef = useRef()

  useEffect(() => {

    const getHistory = async () => {
      try {
        const res = await fetch('https://inspectify-image-server-dev.onrender.com/api/history')
        const data = await res.json()
        setHistory(data)
        setHistoryLoading(false)
      } catch (error) {
        console.log('something went wrong with getting history api')
        setHistory(false)
      }
    }

    getHistory();
    // setHistory(sampleData)
  }, [])

  //if current history doesn't already have this url, then add it to history and post to db
  useEffect(() => {
    if(imageLoaded){
      const imageUrlExists = history.some(item => { return item.image_url == imageURL })
      imageUrlExists ? console.log('img already exists') : setHistory([imageURL, ...history])
      setImageExists(imageUrlExists)
      console.log('imageloaded', imageURL)

    }

    if(imageURL){
      urlInputRef.current.value = imageURL
    }

  }, [imageURL])

  useEffect(() => {
    loadModel()
    setPageLoading(false)
    setToastStatus('success'); setToastText('model rendered');
  }, [])

  useEffect(() => {

    // TODO - current
    const postImage = () => {
      if(!imageExists){

        const imageObj = {
          caption: 'default',
          class_catgories: results,
          image_url: imageURL
        }

      //   const response = await fetch(url, {
      //     method: 'POST',
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(obj)
      // });
        // post method to history
        //update history when post completes
        // const imageObj = {
            // imageref.current
          // results
          // }
          
      } else {console.log(`no post method, iagme already exists`)}
    }

    postImage()

  }, [results, imageExists])


// ------------------------------------------------- UTIL FUNCTIONS

  const loadModel = async () => {
    try{
      const model = await mobilenet.load()
      setModel(model)
    } catch (error){
      console.log(error)
    }
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
              handleImgLoad={handleImgLoad} userCaptionRef={userCaptionRef}
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
