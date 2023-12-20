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
    let mainImg = <div className="skeleton w-[500px] h-[1000px] rounded-2xl p-20 bg-neutral">
        <p className='text-xl'>Image will load here</p>
        <p className='text-md'>Waiting for user input <span className="loading loading-dots"></span></p>
        
    </div>

    if(imageURL){
        mainImg = <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous"
        ref={imageRef} onLoad={handleImgLoad}
        className="object-contain w-8/12 h-8/12"/>
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
                            className='btn bg-neutral-content hover:bg-secondary hover:scale-110 text-neutral text-lg' > Identify </button>
                    }
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