import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <Home></Home>
      </main>
    </>
  );
}

export default App;
