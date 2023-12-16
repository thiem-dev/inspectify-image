//TODO add onchange and onclick to input and buttons

const MainContent = ({imageURL, imageRef}) => {

    return (
        <div className="maincontent-ctn container mx-auto my-1 h-auto w-7/12 flex flex-col justify-evenly">
            <h1>Main Content</h1>
            <div className="inputHolder">
                {/* <input type='file' accept='image/*' capture='camera' className='uploadInput hide'/> */}
                <button className='uploadImage'>Upload Image</button>
                <input type="text" placeholder='Paster imge URL' />
            </div>
            <div className="Imageholder ">
                {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
            </div>
        </div>

    )
}

export default MainContent