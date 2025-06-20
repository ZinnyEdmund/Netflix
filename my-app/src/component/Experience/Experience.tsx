import './Experience.css';

function Experience() {
  return (
    <div className='container'>
      
        <div className='container_header'>
          <h2>More Reasons to Join</h2>
        </div>

        <div className='container_content'>
          <div className='container_texts'>
            <h4>Enjoy on your TV</h4>
            <p>Watch on Smart TVs, <br /> Playstation, Xbox, <br /> Chromecast, Apple TV, Blu- <br />ray players, and more.</p>
            <img src='screen.svg' alt="screen" />
          </div>

          <div className='container_texts'>
            <h4>Download your shows to watch  offline</h4>
            <p>Save your favorites easily and <br /> always have something to <br /> watch.</p>
          </div>

          <div className='container_texts'>
            <h4>Watch everywhere</h4>
            <p>Stream unlimited movies and <br /> TV shows on your phone, <br /> tablet, laptop, and TV.</p>
          </div>

          <div className='container_texts'>
            <h4>Create profiles for kids</h4>
            <p>Send kids on adventures with <br /> their favorite characters in a <br /> space made just for them — <br /> free with your membership.</p>
          </div>
        </div>
    </div>
  )
}

export default Experience