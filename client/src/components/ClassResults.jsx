const ClassResults = ({results}) => {

    const classResults = results.map((item) => {
        //TODO results component
        const chance = item.probability * 100;
        return (
            <div className='display flex flex-row w-full ' key={`resCard-${item.className}`}>
                <div className='w-4/12 text-right'>
                    {item.className} 
                </div>
                <div className='w-8/12 self-start px-3'>
                    <progress className="progress progress-primary w-full h-3" value={chance} max="100"></progress>
                </div>
                
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