import { RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { router } from "./routes/Routes";

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
