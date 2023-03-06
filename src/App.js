import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Pages/Shared/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
