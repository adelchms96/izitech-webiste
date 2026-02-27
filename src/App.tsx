import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { FlyingBallPrivacyPolicy } from "@/pages/FlyingBallPrivacyPolicy";
import { SpassPrivacyPolicy } from "@/pages/SpassPrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "privacy-policy",
        children: [
          {
            path: "flying-ball",
            element: <FlyingBallPrivacyPolicy />,
          },
        ],
      },
      {
        path: "spass-privacy-policy",
        element: <SpassPrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
