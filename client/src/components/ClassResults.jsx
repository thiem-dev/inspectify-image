import ClassResultsCards from "./ClassResultsCards"

const ClassResults = ({results}) => {
    return (
        <div className="results-ctn container flex flex-col text-center mb-12">
            {(results.length !== 0) ? <h1 className="text-2xl">Image likely has:</h1> : '' }
            <ClassResultsCards results={results}/>
        </div>
        

    )
}

export default ClassResults