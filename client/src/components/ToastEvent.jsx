const ToastEvent = ({toastStatus, toastText}) => {

    // console.log(toastStatus, toastText)
    
    const toastItem = () => {
        if (toastStatus){
            console.log('inside ToastStatus')
            return (
                <div className="toast">
                    <div className="alert alert-success">
                    <span>Success.</span>
                    </div>
                </div>
                )
        } else {
            console.log('inside toast fail')
            return (
            <div className="toast">
                <div className="alert alert-success">
                <span>Success.</span>
                </div>
            </div> 
            )
        }
    }


      return toastItem()
}

export default ToastEvent