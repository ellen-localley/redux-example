import React from 'react';
import './App.css';
// import {Counter} from './pages'
// import Member from "./pages/Member";
// import Greeting from './components/Greeting'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import Info from "./components/Signin";
// import SigninTest from "./components/SigninTest";
// import HideTest from "./components/HideTest";
// import TodoContainer from "./todos/TodoContainer";
import CounterContainer from "./counter/CounterContainer";

const App = () =>
    <div>
      <CounterContainer/>
    </div>

export default App;
