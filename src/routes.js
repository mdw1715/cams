// Route imports
import Home from "./views/HelloWorld.vue";
import UserForm from "./views/UserForm.vue";
import AreaForm from "./views/AreaForm.vue";
import AssetForm from "./views/AssetForm.vue";
import Reports from "./views/Reports.vue";

// Routing Paths
export const routes = [
  {
    path: "",
    component: Home,
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
  {
    path: "/reports",
    component: Reports,
  },
];
