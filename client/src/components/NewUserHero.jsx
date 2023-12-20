import heroimg from '../../src/images/inspectify-pika.jpg'
import { GiBulletBill } from "react-icons/gi";

const NewUserHero = ({newUserHandler}) => {
    return (
        <>
        
        <div className="min-h-screen flex items-center justify-center relative bg-slate-900/70 overflow-hidden">
            
            <div className="absolute right-[-800px] -z-10">
                <img src={heroimg} alt="background image" className="" />
            </div>
            <div className="absolute left-20 text-neutral-content w-full">
            <div className="max-w-8xl ml-20">
                <h1 className="mb-5 text-8xl font-bold">
                    Welcome to <span className="text-primary">Inspectify</span>{" "}
                </h1>
                <h2 className="text-5xl mb-5">App Features: </h2>
                <ul className='text-2xl w-full ml-4'>
                    <li className="mb-5 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Upload image via URL</li>
                    <li className="mb-5 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Insert Classification for an Image</li>
                    <li className="mb-5 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Caption and Save Image to history</li>
                    
                </ul>
                <button className="btn btn-primary" onClick={newUserHandler}>Get Started</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default NewUserHero