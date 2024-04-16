import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pets } from "./pages/Pets";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pets',
        element: <Pets  />
    },
    {
        path: '/admin',
        element: <div>Admin</div>
    }
])

export default router