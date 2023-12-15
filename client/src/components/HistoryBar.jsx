import { useState } from "react";

const HistoryBar = ({ history }) => {
    const [classBadges, setClassBadges] = useState([]);

    console.log(history)

    const historyCards = history.map((item) => (
        <div className="card-ctn container historyCard" key={item.id}>
            <div className="imageHolder">
                
                
            </div>
        </div>
    ))

    


        const historyCardsTwo = history.map((item) => (
            <div className="card w-4/12 h-4/12 bg-base-100 shadow-xl" key={item.id}>
                <figure><img src={item.image_url} alt={item.caption} /></figure>
                <div className="card-body">
                <h2 className="card-title">Caption: {item.caption}</h2>
                <div className="card-actions justify-end">
                    
                    <div className="badge badge-outline">${}</div> 
                </div>
                </div>
            </div>
        
        ))
            


    return (
        <div className="historybar-ctn container ">
            <h1>HistoryBar Content</h1>
            <div className="historyCardHolder flex flex-row flex-wrap">
                {historyCardsTwo}
            </div>
        </div>

    )
}

export default HistoryBar