const ClassResultsCards = ({results}) => {
        const resultsCards = results.map((item, index) => {
            const chance = (item.probability * 100).toFixed(2);
            
            return (
                <>
                <div className='display flex flex-row w-full ' key={`resCard-${item.className}`}>
                    <div className='w-4/12 text-right'>
                        {item.className} 
                    </div>
                    <div className='w-8/12 self-start px-3 tooltip' data-tip={chance+`%`}>
                        <progress value={chance} max="100" className="progress progress-primary w-full h-3"></progress>
                    </div>
                </div>
                {(results.length-1 !== index) ? <div className="divider text-sm">or</div> : ''}
                </>
            )
        })

    return (resultsCards)
}

export default ClassResultsCards