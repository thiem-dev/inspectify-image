//TODO add onchange and onclick to input and buttons
// map through class results and identify function

import ClassResults from "./ClassResults"

const MainContent = ({imageURL, 
    imageRef, results, identify, 
    textInputRef, uploadImage, handleImgOnChange,
    handleImgLoad
    }) => {

    // console.log('results',results)
    // TODO add default height and width for the skeleton
    let mainImg = <div className="skeleton w-11/12 h-11/12">Waiting for user input</div>

    if(imageURL){
        mainImg = <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous"
        ref={imageRef} onLoad={handleImgLoad}
        className="object-contain w-80 h-80"/>
    }

    return (
        <>
            <h1>Main Content</h1>
            <div className="maincontent-ctn container mx-auto my-1 px-8 h-full w-full flex flex-col justify-evenly">
                
                <div className="inputHolder flex flex-row gap-8">
                    <input type="text" placeholder='Paste imge URL' ref={textInputRef} onChange={handleImgOnChange}
                        className="w-9/12" />
                    {imageURL && <button className='button bg-stone-700' onClick={identify} >Identify Image</button>}
                </div>
                
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