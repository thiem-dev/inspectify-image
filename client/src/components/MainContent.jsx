//TODO add onchange and onclick to input and buttons
// map through class results and identify function

const MainContent = ({imageURL, imageRef, results, identify}) => {

    const classResults = results.map((item) => (
        //TODO results component
    ))

    return (
        <div className="maincontent-ctn container mx-auto my-1 h-auto w-7/12 flex flex-col justify-evenly">
            <h1>Main Content</h1>
            <div className="inputHolder">
                {/* <input type='file' accept='image/*' capture='camera' className='uploadInput hide'/> */}
                <button className='uploadImage'>Upload Image</button>
                <input type="text" placeholder='Paste imge URL' />
            </div>
            <div className="resultsHolders">
                <h1>Results Holder</h1>

            </div>
            <div className="Imageholder px-6">
                {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
            </div>
            
        </div>

    )
}

export default MainContent