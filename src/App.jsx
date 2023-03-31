import logo from './logo.svg';
import './App.css';
import AOSwrapper from './Common/AOSwrapper';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Screens/Home/Index';
import Artical from './Screens/Artical/Index';
import GirlsABC from './Screens/ByAlphabets/GirlsABC.jsx';
import {GlobalStateProvider} from './GlobelState';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/alphabet/:id",
        element: <GirlsABC/>,
      },
      {
        path: "/artical/:id",
        element: <Artical/>,
      },
    ]
  }
]);

function App() {

  return (
    <GlobalStateProvider>
    <AOSwrapper>
      <div>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </div>
    </AOSwrapper>
    </GlobalStateProvider>
  );
}

export default App;
