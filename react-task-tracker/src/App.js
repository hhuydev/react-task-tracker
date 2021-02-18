// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const name = 'Huy';
  return (
    <div className="container">
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
