import LoginPageConfig from "./Login/LoginPage.Config";
import Error404PageConfig from "./Error-404/Error404.Config";
import Error500PageConfig from "./Error-500/Error500.Config";
import CampanaPageConfig from "./Campana/Campana.Config";
import DashboardPageConfig from "./Dashboard/Dashboard.Config";
const routes = [
  DashboardPageConfig, //no mover de la posicion del array
  CampanaPageConfig,
  LoginPageConfig,
  Error404PageConfig,
  Error500PageConfig,
];
export default routes;
