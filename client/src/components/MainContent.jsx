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
    let mainImg = <div className="skeleton w-[400px] h-[250px] rounded-2xl p-20 bg-neutral">
                    <p className='text-xl'>Image will load here</p>
                    <p className='text-md'>Waiting for user input <span className="loading loading-dots"></span></p>
                </div>

    if(imageURL){
        mainImg = <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous"
                    ref={imageRef} onLoad={handleImgLoad}
                    className="object-contain w-full h-full"/>
    }

    return (
        <>

            <div className="maincontent-ctn container mx-auto my-1 px-8 h-full w-full flex flex-col justify-center gap-y-3">
                <h1 className='font-bold text-2xl text-primary'>Paste a url and learn about your image</h1>
                <div className="inputHolder flex flex-row gap-8 w-full text-lg mb-12">
                    <input type="text" placeholder='Paste imge URL' ref={urlInputRef} onChange={handleImgOnChange}
                        className="w-9/12 p-2.5 " />
                    {imageURL && imageLoaded 
                        && <button onClick={identify} 
                            className='btn bg-neutral-content hover:bg-primary hover:scale-105 text-neutral text-lg' > Identify </button>
                    }
                </div>
                    {imageURL && results.length !== 0 && imageLoaded 
                        && (<div className="inputHolder flex flex-row gap-8 mb-8">
                                <input id='userCaption' type='text' placeholder='caption the image' ref={userCaptionRef} onChange={handleCaptionChange} 
                                    className="w-9/12"/>
                                {caption && <button onClick={submitUserPost} className='btn bg-neutral-content hover:bg-primary hover:scale-105 text-neutral text-lg'>Save to history</button>}
                            </div>
                    )}
                    
                <div className="resultsHolders">
                    <ClassResults results={results}/>
                </div>
                <div className="imageholder flex px-6 min-h-80 justify-center overflow-hidden">
                    {mainImg}
                </div>
            
            </div>
        </>
       
    )
}

export default MainContent