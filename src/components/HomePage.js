import React from 'react';

const HomePage = () => {
  return (
    <div id="splash">
      <div className="splash-header">
        <h1>Village</h1>
        <p>Child care is too expensive. So we’re trying to change that.</p>
        <p>Village will help you find the right family to share a nanny with. And it’s super easy.</p>
        <button
          className="village-button"
          onClick={()=>{}}>Get Started For Free Now</button>
      </div>
      <div className="splash-content">
        <h1>How Does It Work?</h1>
        <h4>Create a profile.</h4>
        <p>Describe who you are, who your kid(s) are, and some basic info about your parenting style. You know, the usual things people would want to know if their kid is going to be spending every day with yours.</p>
        <h4>Browse</h4>
        <p>View profiles of different parents in your area. Figure out who’s right for you, and maybe message a few families.</p>
        <h4>Commit</h4>
        <p>We provide the connection, you work out the details. Once you find the family that’s right for you, you are free to to email them. </p>
      </div>
    </div>
  );
};

export default HomePage;
