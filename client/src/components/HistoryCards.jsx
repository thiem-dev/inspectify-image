const HistoryCards = ({history, setImageURL}) => {

    const classText = (image) => {
        return (
            image.class_categories.map((cat,index) => (
                <div key={`${cat.className}-${index}`} className="text-md">
                    <p>{cat.className} {`${(cat.probability*100).toFixed(2)}%`}</p>
                </div>
        )) 
    )}

    const historyCards = history.map((image, index) => (
        <div key={`${image}-${index}`}
            onClick={() => setImageURL(image.image_url)} 
            className="flex justify-center items-center card group relative col-span-4 h-[200px] bg-base-100 shadow-xl cursor-pointer overflow-hidden">
            <div className="flex justify-center items-center h-[400px] w-[400px] overflow-hidden">
                <img src={image.image_url} alt={image.caption}
                className='object-fit group-hover:scale-110'/>
            </div>

            <div className="curtain absolute inset-0 bg-transparent group-hover:bg-gray-800/80"></div>

            <div className="text-ctn absolute inset-0 flex flex-col text-gray-100 px-9 translate-y-[110%] overflow-hidden group-hover:translate-y-[30%]" >
                <h1>{image.caption}</h1>
                <br/>
                { image.class_categories !== null
                    ? classText(image) 
                    : <div>no class categories</div> }
            </div>
        </div>
    ))

    return (historyCards)
}

export default HistoryCards