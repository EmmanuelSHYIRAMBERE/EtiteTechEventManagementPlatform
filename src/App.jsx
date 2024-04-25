import {
  createBrowserRouter,
  RouterProvider,

  Outlet,

} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EventList from "./components/EventList";
import Booking from "./components/Booking";
import Login from "./components/Login";




const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};



const router = createBrowserRouter([
  {
    path:"/", element:<Layout/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/events",element:<EventList/>},
      {path:"/booking",element:<Booking/>},
      {path:"/login",element:<Login/>},
    ]
    
    
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;