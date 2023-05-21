import "./about.css";

function AboutPage() {
  return (
    <div className="containera">
      <h1 className="des1">Description: </h1>
      <p className="des1">This is a real-time weather website which uses api's to extract information 
      and make it available to users in the from of current weather and weekly forecast.</p>
      <br/>
      <h3>Built upon</h3>
      <p className="des1">HTML, CSS, Javascript, ReactJs</p>
      <h3>Api's used</h3>
      <p className="des1">RapidApi and OpenWeatherMapApi</p>
      <h3>Developed by</h3>
      <p className="dev des1">Akash Chowdary kodali</p>
      {/* <h4>Developer Links:</h4> */}
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5240/" rel="noreferrer" target="_blank">
          <img src={'./icons/linkedin.png'} height={40} alt="linkedin-link"/>
        </a>
        <a href="https://github.com/akodali9" rel="noreferrer" target="_blank">
          <img src={require('./icons/github.png')} height={40} alt="Github-link"/>
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
