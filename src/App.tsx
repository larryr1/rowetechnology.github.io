import './App.css';
import rtLogo from './assets/rt-logo.png';

function App() {

  return (
    <>
      
      <header>
        <div>
          <img src={rtLogo} className="logo" alt="React logo" />
        </div>
        <h1>
          Bringing tech solutions where you need them the most.
        </h1>
      </header>
      <main>
        <h2>
          We offer something for everyone.
        </h2>
        <p>
          Specializing in solutions for home and small business, we provide the following services and more:
        </p>
        <div className="solutionlist">
          <p>Web Development</p>
          <p>Specialized Software Development</p>
          <p>Consulting</p>
          <p>Network Management</p>
          <p>System Administration</p>
          <p>Technical Support</p>
        </div>
        <h2>
          Contact Us
        </h2>
        <p>
          We are always happy to discuss your needs and how we can help. However, Rowe Technology is not currently accepting new clients. Please check back for contact information at a later date.
        </p>
      </main>
    </>
  )
}

export default App
