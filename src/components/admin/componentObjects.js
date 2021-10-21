import Content from "./Content";
import Products from "./Products";
import Analytics from "./Analytics";

let componentObject = {
  dashboard: {
    title: "dashboard",
    component: <Content />,
  },
  products: {
    title: "products",
    component: <Products />,
  },
  analytics: {
    title: "analytics",
    component: <Analytics />,
  },
};

export default componentObject;
