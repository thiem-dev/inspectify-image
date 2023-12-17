//TODO add onchange and onclick to input and buttons
// map through class results and identify function

import ClassResults from "./ClassResults"

const MainContent = ({imageURL, 
    imageRef, results, identify, 
    textInputRef, uploadImage, handleOnChange,
    handleImgLoad
    }) => {


    // console.log('results',results)
    let mainImg = <div className="skeleton w-32 h-32">Hello</div>

    if(imageURL){
        mainImg = <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous"
        ref={imageRef} className="" onLoad={handleImgLoad}/>
    }




    return (
        <>
            <h1>Main Content</h1>
            <div className="maincontent-ctn container mx-auto my-1 px-8 h-full w-full flex flex-col justify-evenly">
            
            <div className="inputHolder flex flex-row gap-8">
                <input type="text" placeholder='Paste imge URL' ref={textInputRef} onChange={handleOnChange}
                    className="w-9/12" />
                {imageURL && <button className='button bg-stone-700' onClick={identify} >Identify Image</button>}
            </div>
            
            <div className="resultsHolders">
                <ClassResults results={results}/>
            </div>
            <div className="Imageholder px-6 flex justify-center">
                {mainImg}
            </div>
            
        </div>
        </>
       

        

    )
}

export default MainContent