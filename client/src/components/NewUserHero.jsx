import heroimg from '../../public/images/inspectify-pika.jpg'

const NewUserHero = ({newUserHandler}) => {
    
    return (
<>
  <div className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute right-[-500px]">
      <img src={heroimg} alt="background hero image" className="" />
    </div>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content absolute left-20 text-neutral-content">
      <div className="max-w-8xl">
        <h1 className="mb-5 text-8xl font-bold">
          Welcome to <span className="text-primary">Inspectify</span>{" "}
        </h1>
        <h2 className="text-5xl">App Features:</h2>
        <ul>
          <li className="mb-5">Insert Image URL</li>
          <li className="mb-5">Insert Classification for an Image</li>
          <li className="mb-5">Caption and Save Image to history</li>
        </ul>
        <button className="btn btn-primary" onClick={newUserHandler}>
          Get Started
        </button>
      </div>
    </div>
  </div>
</>

        
    )
}

export default NewUserHero