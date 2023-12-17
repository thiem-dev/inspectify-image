const ClassResults = ({results}) => {

    // const classResults = results.map((item) => (
    //     //TODO results component
        
    // ))

    return (
        <div className="results-ctn container">
            <h1>ClassResults Content</h1>
            <span>hello </span><progress className="progress progress-primary w-56" value={0} max="100"></progress>
            <span> </span><progress className="progress progress-primary w-56" value="10" max="100"></progress>
            <span> </span><progress className="progress progress-primary w-56" value="40" max="100"></progress>
        </div>

    )
}

export default ClassResults