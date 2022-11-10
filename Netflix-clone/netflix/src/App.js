import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/login'/>
        <Route excat path='/player'/>
      </Routes>
      </BrowserRouter>
      {/* <Banner fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Documentaris" fetchURL={requests.fetchDocumentaries}/> */}
    </div>
  );
}

export default App;
