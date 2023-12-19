const ClassResults = ({results}) => {

    const classResults = results.map((item) => {
        //TODO results component
        const chance = item.probability * 100;
        return (
            <div className='' key={`resCard-${item.className}`}>
                <span>{item.className}</span><progress className="progress progress-primary w-56" value={chance} max="100"></progress>
            </div>
            )
        })

    return (
        <div className="results-ctn container flex flex-col text-center">
            <h1 className="text-2xl">Image likely has:</h1>
            {classResults}
        </div>
        

    )
}

export default ClassResults