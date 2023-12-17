const ClassResults = ({results}) => {

    // const classResults = results.map((item) => (
    //     //TODO results component
        
    // ))

    return (
        <div className="results-ctn container flex flex-col text-center">
            <h1 className="text-2xl">Image likely has:</h1>
            <div className=''>
                <span>hello </span><progress className="progress progress-primary w-56" value={0} max="100"></progress>
            </div>
            <div className=''>
                <span>hello2 </span><progress className="progress progress-primary w-56" value="10" max="100"></progress>
            </div>
            <div className=''>
                <span>hello3 </span><progress className="progress progress-primary w-56" value="40" max="100"></progress>
            </div>
        </div>

    )
}

export default ClassResults