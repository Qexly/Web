import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("Pages/Main")
  },
  {
    path: "photos",
    lazy: () => import("Pages/Photos")
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;