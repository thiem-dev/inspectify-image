// TODO only submit if all: imageURL, caption, class categories exist else, toast error



import {useState} from 'react'
import ClassResults from "./ClassResults"

const MainContent = ({imageURL, 
    imageRef, results, identify, 
    urlInputRef, uploadImage, handleImgOnChange,
    handleImgLoad, userCaptionRef, postImage, 
    setUserCaption, imageLoaded
    }) => {

    const [caption, setCaption] = useState('')
    

// ------------------------------------------------ Util Function

    const handleCaptionChange = (e) => {
        setCaption(userCaptionRef.current.value)
    }

    const submitUserPost = (e) => {

        console.log('submitted response', caption, results)
        postImage(caption)
    }



// --------------------------------------------- Content Elements
        
    // TODO add default height and width for the skeleton
    let mainImg = <div className="skeleton w-11/12 h-11/12">Waiting for user input</div>

    if(imageURL){
        mainImg = <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous"
        ref={imageRef} onLoad={handleImgLoad}
        className="object-contain w-80 h-80"/>
    }

    return (
        <>

            <div className="maincontent-ctn container mx-auto my-1 px-8 h-full w-full flex flex-col justify-evenly">
                <h1 className='font-bold text-3xl text-primary'>Paste a url and learn about your image</h1>
                <div className="inputHolder flex flex-row gap-8 p-2 bg-accent">
                    <input type="text" placeholder='Paste imge URL' ref={urlInputRef} onChange={handleImgOnChange}
                        className="w-9/12" />
                    {imageURL && imageLoaded && <button className='button bg-stone-700' onClick={identify} >Identify Image</button>}
                </div>
                    {imageURL && results.length !== 0 && caption && imageLoaded 
                        && (<div className="inputHolder flex flex-row gap-8">
                                <input id='userCaption' type='text' placeholder='caption the image' ref={userCaptionRef} onChange={handleCaptionChange} 
                                    className="w-9/12"/>
                                <button onClick={submitUserPost} className='button bg-stone-700'>Save to history</button>
                            </div>
                    )}
                    
                <div className="resultsHolders">
                    <ClassResults results={results}/>
                </div>
                <div className="Imageholder px-6 max-h-80 flex justify-center overflow-hidden">
                    {mainImg}
                </div>
            
            </div>
        </>
       
    )
}

export default MainContent