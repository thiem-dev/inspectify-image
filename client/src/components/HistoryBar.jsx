import HistoryLoading from './Loading/HistoryLoading'
import HistoryCards from './HistoryCards'

const HistoryBar = ({ history, setImageURL, historyLoading }) => {
    if(historyLoading){
        return (<HistoryLoading/>)
    }

    return (
        <>
            <h1 className="font-bold text-2xl text-center">Prior images</h1>
            <div className="historyCardHolder grid grid-flow-row grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-5 my-8 mx-8 justify-evenly content-center">
                <HistoryCards history={history} setImageURL={setImageURL}/>
            </div>
        </>

    )
}

export default HistoryBar