import { useState } from "react";

const HistoryBar = ({ history }) => {
    const [classBadges, setClassBadges] = useState([]);

    console.log(history)

    const historyCards = history.map((item) => (
        <div key={item.id} className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            {/* <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div> */}
        </div>
    ))

    


    const historyCardsTwo = history.map((item) => (
        <div className="card group relative col-span-4 max-h-[900px] bg-base-100 shadow-xl cursor-pointer overflow-hidden" key={item.id}>
            <div className="img-ctn h-[250px] w-[250px] overflow-hidden">
                <img src={item.image_url} alt={item.caption}
                className='object-cover group-hover:scale-110'/>
            </div>

            <div className="curtain absolute inset-0 bg-transparent group-hover:bg-gray-800/80"></div>

            <div className="text-ctn absolute inset-0 flex flex-col text-gray-100 px-9 translate-y-[110%] overflow-hidden group-hover:translate-y-[30%]" >
                <h1 className="text-3xl font-bold">Title</h1>
                <div className="text-lg p-1">Date: 10-15-2023</div>
                <p className="overflow-hidden">Description: Atmospheric refraction flattened the solar disk and Atmospheric refraction flattened the solar disk and</p>
            </div>
        </div>
        
        ))
            


    return (
        <div className="historybar-ctn container ">
            <h1>HistoryBar Content</h1>
            <div className="historyCardHolder grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-8 gap-8 my-16 mx-10 justify-evenly content-center">
                {/* {historyCards} */}
                {historyCardsTwo}
            </div>
        </div>

    )
}

export default HistoryBar