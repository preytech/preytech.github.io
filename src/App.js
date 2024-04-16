import Header from './components/header';
import Footer from './components/footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Main from './Main';
import Servises from './Servises';
import Doctors from './Doctors';
import About from './About';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/servises",
                element: <Servises/>,
            },
            {
                path: "/doctors",
                element: <Doctors/>,
            },
            {
                path: "/about",
                element: <About/>,
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