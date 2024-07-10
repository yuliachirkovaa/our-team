import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/component";
import { MainPage } from "../pages/main";
import { UserPage } from "../pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <MainPage />},
      {path: ":userId", element: <UserPage/>},
    ],
  },
]);
