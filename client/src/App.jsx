import { RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { router } from "./routes/Routes";
import  { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster/>
        </>
    );
}

export default App;
