import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListingPage from "./pages/ListingPage";
import SubmissionDetails from "./pages/SubmissionDetails";
import UploadSubmissionForm from "./pages/UploadSubmissionForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FD] min-h-screen h-auto">
        <Outlet />
      </div>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListingPage />,
      },
      {
        path: "/uploadsubmission/:id",
        element: <UploadSubmissionForm />,
      },
      {
        path: "/submissiondetail/:id",
        element: <SubmissionDetails />,
      }

    ],
  },
]);
function Router() {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
}
export default Router;
