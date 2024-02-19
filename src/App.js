import './App.css';

function App() {
  return (
    <div>
      <div className="head-div">
      <ul className="ul-list">
        <li className="list-items">Emotions</li>
        <li className="list-items">Manifesto</li>
        <li className="list-items">Self-awareness test</li>
        <li className="list-items">Work With Us</li>
        <button className="butn">Download App</button>
      </ul>
      <div className = "ahead">
        <div className="paras">
          <p>Built out of frustration</p>
          <h1>Meet the ahead App</h1>
        </div>
        <div className="emotional">
        <img src="https://storage.googleapis.com/web-api-media-uploads/media/Image_3_2759eef8e2/Image_3_2759eef8e2.svg" alt="ahead" className="img" />
          <div>
          <p>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
          <p>Think as it as a pocket cheer leader towards a better more fulfilling.</p>
          </div>
        </div>
      </div>
      <div className="wonder">
        <p>Lets your friends, family and co-workers(anonymously) rate your skills</p>
        <h1>Ever Wondered what others think of you?</h1>
        <div className="inside-div">
          <div className="mar"><p>Answer questions on your social skills</p></div>
          <div className="mar"><p>Let others anonymously answer the same questions about you</p></div>
          <div className="mar"><p>Find out where you and others see things the same way and where not!</p></div>
        </div>
        <div className = "divs-nums">
        <div className = "div-1"><p>You</p></div>
        <div className = "div-2"><p>anonymous 1</p></div>
        <div className = "div-3"><p>anonymous 2</p></div>
        <div className = "div-4"><p>anonymous 3</p></div>
        </div>
      </div>
      <div className = "privacy">
        <p>We take privacy seriously</p>
        <h1>Before you get started</h1>
        <p>We won't share your answers with anyone (and won't ever tell you which friends said what about you)</p>
        <button className="butn">Start a Test</button>
        <p>Take only 5 mins</p>
      </div>
      <div className = "master-life">
        <p>Ahead app</p>
        <div className = "head-img">
          <h1>Master your life by mastering your emotions</h1>
          <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxUwyA1jEzZOCe0Jtgk2vgVatOrDuiE17IA&usqp=CAU" alt="app" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
