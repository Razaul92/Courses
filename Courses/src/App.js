import { Route, Switch,Redirect} from "react-router-dom";
import './App.css';
import "./component/FontAwesome/index";
import HomePage from "./pages/Homepage";
import  ReactJs from './component/Course details/React';
import  JavaScript from './component/Course details/JavaScriptDetail';
import  CSS from './component/Course details/CSS';
import  Agile from './component/Course details/Agile';
import ViewMore from './pages/ViewmorePage';
import  Selenium from './component/Course details/selenium';






const App = () => {
  

  
    return ( 
      <Switch>
        <Route path="/" exact>
           <HomePage/>
        </Route>
         <Route path="/homePage">
        <HomePage/>
      </Route>
      <Route path="/morepage">
        <ViewMore/>
      </Route>
      <Route path="/javascript">
        <JavaScript/>
      </Route>
       <Route path="/react">
         <ReactJs/>
       </Route>
        <Route path="/css">
          <CSS/>
        </Route>
         <Route path="/agile">
           <Agile/>
         </Route>
         <Route path="/selenium">
           <Selenium/>
         </Route>
         <Route path="*">
        <Redirect to="/" />
      </Route>
       
      </Switch>
     );
  }

 
export default App;