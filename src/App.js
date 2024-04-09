import Main from './Main';
import Header from './components/header';
import Footer from './components/footer';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Outlet, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Root() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;