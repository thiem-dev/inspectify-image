import { useState, useEffect, useRef } from 'react'
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';
import './App.css'
// import sampleData from './assets/sampleData.json'
import MainContent from './components/MainContent'
import HistoryBar from './components/HistoryBar'
import PageLoading from './components/Loading/PageLoading'
import NewUserHero from './components/NewUserHero'
import ToastMe from './components/ToastMe'

function App() {
  const [history, setHistory] = useState([])
  const [pageLoading, setPageLoading] = useState(true)
  const [historyLoading, setHistoryLoading] = useState(true)
  const [model, setModel] = useState(null)
  const [results, setResults] = useState([])
  const [imageURL, setImageURL] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isNewUser, setNewUser] = useState(true)
  const []

  const imageRef = useRef()
  const urlInputRef = useRef()
  const userCaptionRef = useRef()
  const API_URL = `https://inspectify-image-server-dev.onrender.com`


  //get all history, load tfjs model
  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetch(`${API_URL}/api/history`)
        const data = await res.json()
        setHistory(data)
        setHistoryLoading(false)
      } catch (error) {
        console.log('something went wrong with getting history api')
        ToastMe.success('something went wrong with getting history api')
        setHistoryLoading(false)
      }
    }

    const tfModelInit = () => {
      loadModel()
      setPageLoading(false)
      ToastMe.success('Model Loaded success!')
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

      try {
        const res = await fetch(`${API_URL}/api/history`, {
          method: 'POST',
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(imageObj)
        })
            
          if(!res.ok){ throw new Error(`HTTP error! Status: ${res.status}`); }
          const data = await res.json();
          console.log(`POST success`, data)
          ToastMe.success('Post to history success!')
          
          //set history and reset input values
          setHistory([imageObj, ...history])
          userCaptionRef.current.value = '';
          urlInputRef.current.value = ''
          setResults([])
          setImageURL(null)

        } catch(error){
          console.log(`problem with posting to api history: ${imageObj}`)
          ToastMe.fail('problem with posting to api history')
        } 
          
      } else {
        console.log(`image needs to be identified`)
        ToastMe.fail('image needs to be identified')
      }
  }

  const identify = async () => {
    const results = await model.classify(imageRef.current)
    setResults(results)
    ToastMe.success('Identify Sucess')
    console.log(results)
  }


  const handleImgLoad = (e) => {
    const isImgLoaded = e.target.naturalWidth > 0;
    console.log('is image loaded:', isImgLoaded)

    if(isImgLoaded){
      setImageLoaded(true)
    } else {
      setImageLoaded(false)
      ToastMe.fail('image url is invalid')
      console.log('image url is invalid')
    }
  }
     
  const handleImgOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }

  const newUserHandler = () => {
    setNewUser(false)
  }

  // ----------------------------------------------- return React Components
  if(pageLoading){
    return (<PageLoading/>)
  }

  if(isNewUser){
    return (<NewUserHero newUserHandler={newUserHandler}/>)
  }
   
  return (
    <>
      <div id="main-body" className="container">
      
        <div className="mainHolder container w-full h-full flex flex-row justify-evenly my-10 gap-4 overflow-hidden">
          <div className="w-7/12 h-5/6">
            <MainContent 
              imageURL={imageURL} imageRef={imageRef} results={results} 
              identify={identify} urlInputRef={urlInputRef} handleImgOnChange={handleImgOnChange} 
              handleImgLoad={handleImgLoad} userCaptionRef={userCaptionRef} postImage={postImage} imageLoaded={imageLoaded}
            />
          </div>
          <div className="divider divider-horizontal py-20 divider-accent-content"><span className="[writing-mode:vertical-lr]">History</span></div> 
          <div className="historybar-ctn container w-5/12 h-5/6 overflow-y-scroll">
            <HistoryBar history={history} setImageURL={setImageURL} historyLoading={historyLoading}/>
          </div>
        </div>{/* <! END MAIN HOLDER--> */}
       </div>{/* <! END MAIN BODY--> */}
    </>
  )
}

export default App
