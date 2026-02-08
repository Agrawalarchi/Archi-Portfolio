import "./Project.css";

export default function Project() {
  return (
    <div className="wrapper" id="projects">
        <h2 className="head">Project</h2>
        <section className="projects" id="projects">

      <a className="project" href="https://gaming-arena-neon.vercel.app/"  target="_blank" >
        <h2 className="project-title">Gaming Arena</h2>
        <div className="video">
          <video
            src="/videos/gamingArenaVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
         Gaming Arena is web based project that brings an one and all platform for fun mini games.Navigate to the game of your choice from the main menu.enjoy the interactive experience and challenge your friends.
        </p>
        <ul className="project-tech-list">
          <li className="project-tech-item">Html</li>
          <li className="project-tech-item">css</li>
          <li className="project-tech-item">JavaScript</li>
        </ul>
      </a>


      <a className="project"  href="https://weather-api-alpha-puce.vercel.app/" target="_blank">
        <h2 className="project-title">Weather App</h2>
        <div className="video">
          <video
            src="/videos/weatherWidgetAppVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
          A responsive web application that fetches real-time weather data from an external API. Displays temperature, humidity, and weather conditions based on the user’s location or searched city.
        </p>
        <ul className="project-tech-list">
          <li className="project-tech-item">React</li>
          <li className="project-tech-item">API</li>
          <li className="project-tech-item">CSS</li>
        </ul>
      </a>

      <a className="project" href="https://currency-converter-tau-five-40.vercel.app/"  target="_blank" >
        <h2 className="project-title">Currency Converter</h2>
        <div className="video">
          <video
            src="/videos/currencyConverterVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
          A dynamic converter that allows users to calculate real-time currency exchange rates between different countries using live API data. Includes error handling and user-friendly design.
        </p>
        <ul className="project-tech-list">
          <li className="project-tech-item">React</li>
          <li className="project-tech-item">API</li>
          <li className="project-tech-item">CSS</li>
        </ul>
      </a>

      <a className="project"  href="https://to-do-gilt-gamma.vercel.app/"  target="_blank">
        <h2 className="project-title">To-Do App</h2>
        <div className="video">
          <video
            src="/videos/toDoListVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
         A simple and interactive task management app that allows users to add, edit, delete, and mark tasks as completed. Built with clean UI and local storage to save tasks for future sessions.
        </p>
        <ul className="project-tech-list">
          <li className="project-tech-item">React</li>
          <li className="project-tech-item">Hooks</li>
          <li className="project-tech-item">CSS</li>
        </ul>
      </a>

      

      <a className="project" href="https://lottery-ticket-teal.vercel.app/" target="_blank">
        <h2 className="project-title">Lottery Game</h2>
        <div className="video">
          <video
            src="/videos/lotteryGameVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
         A fun mini-game where users generate random numbers and match them with winning combinations to test their luck. Demonstrates use of random number generation and conditional logic.
        </p>
        <ul className="project-tech-list">
          <li className="project-tech-item">React</li>
          <li className="project-tech-item">Hooks</li>
          <li className="project-tech-item">CSS</li>
        </ul>
      </a>


      <a className="project" href="https://rock-paper-scissors-vert-theta.vercel.app/"  target="_blank">
        <h2 className="project-title">Rock paper Scissor</h2>
        <div className="video">
          <video
            src="/videos/rockPaperScissorVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
          An interactive browser game where users compete against the computer. Implements basic game logic, score tracking, and engaging animations for a better user experience.
        </p>
         <ul className="project-tech-list">
          <li className="project-tech-item">Html</li>
          <li className="project-tech-item">css</li>
          <li className="project-tech-item">JavaScript</li>
        </ul>
      </a>

      <a className="project" href="https://tick-tac-toe-kappa.vercel.app/"  target="_blank">
        <h2 className="project-title">Tic Tac Toe</h2>
        <div className="video">
          <video
            src="/videos/ticTacToeVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <p className="project-desc">
          A two-player logic game featuring real-time move validation, win detection, and reset options. Built with JavaScript to practice DOM manipulation and interactive UI design.
        </p>
         <ul className="project-tech-list">
          <li className="project-tech-item">Html</li>
          <li className="project-tech-item">css</li>
          <li className="project-tech-item">JavaScript</li>
        </ul>
      </a>

    </section>
    </div>
  );
}
