// Route imports
import Home from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import UserForm from "./views/UserForm.vue";
import AreaForm from "./views/AreaForm.vue";
import AssetForm from "./views/AssetForm.vue";

// Routing Paths
export const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/userform",
    component: UserForm,
  },
  {
    path: "/areaform",
    component: AreaForm,
  },
  {
    path: "/assetform",
    component: AssetForm,
  },
];
