import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="leftSide">
          <img src="public\logo.png" alt="Your Company Logo" />
          <div className="name">Hay there !!</div>
        </div>

        <div className="rightSide">
          <div className="header">
            <h1>Log In</h1>
          </div>
          <div className="form">
            <form action="">
              <div className="info">
                <input
                  type="text"
                  className="text"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="info">
                <input
                  type="Password"
                  className="text"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="check">
                <input type="checkbox" id="checkbox" required />
                <label htmlFor="checkbox"> Remember Me!</label>
              </div>
              <button className="submit">Submit</button>
            </form>
          </div>
          <div className="register">
            <p>Don't have an account?</p>
            <a href="#">Register Here</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
