const HistoryBar = ({ history }) => {

    const historyCards = history.map((item) => (
        <div className="card-ctn container historyCard" key={item.id}>
            <div className="imageHolder">
                <img src={item.image_url} alt={item.caption} />
                <span>{item.caption}</span>
            </div>
        </div>
    ))

        const historyCardsTwo = history.map((item) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                </div>
                </div>
            </div>
        
        ))
            


    return (
        <div className="historybar-ctn container">
            <h1>HistoryBar Content</h1>
            {historyCardsTwo}
        </div>

    )
}

export default HistoryBar