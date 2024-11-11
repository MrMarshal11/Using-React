import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
const [option, setOption] = useState('profile');

function changeRoute(route) {
  setOption(route);
}

return (
  <div>
    <h1>Welcome to the App!</h1>
    <Link to={option}>Go to route</Link>
    <button onClick={() => changeRoute('settings')}>Settings</button>
    <button onClick={() => changeRoute('profile')}>Profile</button>
  </div>
)
}

export default App;