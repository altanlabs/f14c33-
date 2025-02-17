import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
