import "../Pages/About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="profile">
          <div className="mission">
            Hi there, my name is Augusto Rupay and I'm a software developer
            currently enrolled in Pursuit NYC. Budget Genie is a full stack
            passion project inspired by TrueBill, and other budget management
            apps alike. It makes use of JS, React, Express, Postman, Bootstrap,
            Visx, & Heroku. Budget Genie is an educational project -- any
            likeness to any other genies are strictly coincidential and
            unintentional so don't sue me.
          </div>
          <img
            className="pic"
            src="https://avatars.githubusercontent.com/u/96318127?v=4 "
            alt=""
          ></img>
          <a href="https://github.com/arupay/budgetapp">Source Code</a>
          <br />
          <a href="https://github.com/arupay">Github</a>
          <br />
          <a href="https://www.linkedin.com/in/augusto-rupay-a07a286b/">
            LinkedIn
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
