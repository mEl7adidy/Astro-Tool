import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ImgGallary from './components/album/ImgGallary';

function App() {
  return (
    <div className="App">
      <Header />
      <ImgGallary />
    </div>
  );
}

export default App;
