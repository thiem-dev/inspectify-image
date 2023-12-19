import { useState } from "react";
import HistoryLoading from './Loading/HistoryLoading'

const HistoryBar = ({ history, setImageURL, historyLoading }) => {
    const [classBadges, setClassBadges] = useState([]);

    // console.log(history)
    // key={`hcard${item.id}`} 

    if(historyLoading){
        return (<HistoryLoading/>)
    }


    // const classText = (data) => {
    //     return data.map(([key, val],index) => (
    //     <div key={`${key}-${index}`} className="text-lg p-1">{key} {`${val*100}%`}</div>
    // ))}

    // const classText2 = (data) => {console.log('historybar class categories', data)}

    const classText3 = (classData) => {
        return Object.entries(classData).map(([key, val], index) => (
            <div key={`${key}-${index}`} className="text-lg p-1">{key} {`${val*100}%`}</div>
        ))
    }

    const historyCards = history.map((image, index) => (
        <div key={`${image}-${index}`}
            onClick={() => setImageURL(image.image_url)} 
            className="card group relative col-span-4 h-[200px] bg-base-100 shadow-xl cursor-pointer overflow-hidden">
            <div className="img-ctn h-[300px] w-[300px] overflow-hidden">
                <img src={image.image_url} alt={image.caption}
                className='object-cover group-hover:scale-110'/>
            </div>

            <div className="curtain absolute inset-0 bg-transparent group-hover:bg-gray-800/80"></div>

            <div className="text-ctn absolute inset-0 flex flex-col text-gray-100 px-9 translate-y-[110%] overflow-hidden group-hover:translate-y-[30%]" >
                { image.class_categories !== null
                    ? classText3(image.class_categories) 
                    : <div>no class categories</div> }
                {/* {image.class_categories !== null 
                    ? classText2(image)
                    : <div>no class categories</div> } */}
            </div>
        </div>
        
        ))


    return (
        <>
            <h1>HistoryBar Content</h1>
            <div className="historyCardHolder grid grid-flow-row grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-5 my-8 mx-8 justify-evenly content-center">
                {historyCards}
            </div>
        </>
        

    )
}

export default HistoryBar