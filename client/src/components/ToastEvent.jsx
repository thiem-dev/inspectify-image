import React, { useEffect, useState } from 'react';

const ToastEvent = ({toastStatus, toastText}) => {
    const [show, setShow] = useState(true);

    // console.log(toastText)

    useEffect(() => {
        let timeout; 
        if(toastStatus){
            timeout = setTimeout(() => {setShow(false)}, 5000)
        }
        return () => clearTimeout(timeout)
    }, [toastStatus])

    const handleClick = () => {
        setShow(false)
    }
    
    const toastItem = () => {
        if (toastStatus === 'success'){
            console.log('inside ToastStatus')
            return (
                <div onClick={handleClick} className="toast z-100">
                    <div className="alert alert-success">
                        <span>Sucess! {toastText}</span> 
                    </div>
                </div>
                )
        } else {
            console.log('inside toast fail')
            return (
            <div onClick={handleClick} className="toast">
                <div className="alert alert-fail">
                <span>{toastText}</span>
                </div>
            </div> 
            )
        }
    }


    return (show && toastItem())
}

export default ToastEvent