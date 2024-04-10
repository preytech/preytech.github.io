import Main from './Main';
import Header from './components/header';
import Footer from './components/footer';
import Servises from './Servises';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


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