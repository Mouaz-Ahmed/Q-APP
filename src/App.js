import './App.css';
import LogIn from './views/LogIn';
// import Home from './views/Home'
import Router from './config/router';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Q-APP</h1>
        {/* <LogIn /> */}
        {/* <Home /> */}
        <Router />
      </header>
    </div>
  );
}

export default App;