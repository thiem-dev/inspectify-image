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
                    <h1 className="text-9xl font-bold">
                        Welcome to <span className="text-primary">Inspectify </span>{" "}
                    </h1>
                    <h2 className='text-3xl mb-20 ml-2'>Find out whats in your photo <span className='opacity-50 text-xl'>(Results may vary)</span></h2>
                    <h2 className="text-3xl mb-5 text-primary font-semibold">Features: </h2>
                    <ul className='text-2xl w-full ml-4 mb-5'>
                        <li className="mb-3 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Upload Image via URL</li>
                        <li className="mb-3 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Use MobileNet to classify objects in an Image</li>
                        <li className="mb-3 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Caption and save image caption and classifications into a history</li>
                        <li className="mb-3 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Click on older history images and reclassify it</li>
                        <li className="mb-3 flex items-center gap-x-3 p-2"><span><GiBulletBill/></span>Conditionally rendered form based on current form step (this was to prevent invalid user or submitting images with no classification or captions)</li>
                    </ul>
                    <button className="btn btn-primary" onClick={newUserHandler}>Get Started</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewUserHero