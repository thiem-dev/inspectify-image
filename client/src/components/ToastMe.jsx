import Toastify from 'toastify-js'

const ToastMe = {
    success: (text) => {
        Toastify({
            text: `${text}`,
            duration: 5000,
            gravity: "top",
            close: true,
            position:"center",
            style: {
                background: "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))"
            }
            }).showToast()
    },
    fail: (error) => {
        Toastify({
            text: `${error}`,
            duration: 6000,
            gravity: "top",
            close: true,
            position:"center",
            style: {
                background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))"
            }
            }).showToast()
    }
}

export default ToastMe
