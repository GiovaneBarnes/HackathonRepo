import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#bdab66'}}>
      <Header title="Econmunity!"/>
      <Feed />
      <Footer text="Built By The Squad" />
    </div>
  );
}

export default App;
