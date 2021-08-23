// import Header from "./AppComponent/Header";
import LandingPage from "./Component/LandingPage";
import Header from "./Container/Header";
import { Store } from "./Container/Store";
import FormValidation from "./FormValidation/FormValidation";
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Productlisting from './Container/ProductList'
import Productdetails from "./Container/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      {/* <FormValidation/> */}
      <Store/>
      {/* <BrowserRouter>
       <Header/>
        <Switch>
          <Route exact path='/' component={Store}/>
          <Route exact path='/'  component={Productlisting} />
          <Route path='/product/:id'  component={Productdetails} />
          <Route>404 not found</Route>
        </Switch>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
