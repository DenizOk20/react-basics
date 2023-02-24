import './App.css';
import Navbar from './components/Navbar';
import Place from './components/Place';
import data from './data';

function App() {
  const place = data.map(item => {
    return(
      <Place
        {...item}
      />

    )
  })
  return (
    <div className="App">
      <Navbar/>
      <section>
        {place}
      </section>
    </div>
  );
}

export default App;
