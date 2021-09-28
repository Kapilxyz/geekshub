import './App.css';
import "./assets/css/animate.min.css";
 import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/intlTelInput.css";
import "./assets/css/jquery.exzoom.css";
import "./assets/css/media.css";
// import "./assets/css/owl.carousel.css";
import "./assets/css/style.css";
import Home from './component/pages/Home';
import { Route, Switch } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return <Switch>
    <Route path="/" exact component={Home} />
   
  </Switch>
}
export default App;