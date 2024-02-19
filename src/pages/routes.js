import ServicePageConfig from "./Service/Service.Config";
import Error404PageConfig from "./Error-404/Error404.Config";
import Error500PageConfig from "./Error-500/Error500.Config";
import AnnouncementPageConfig from "./Announcement/Announcement.Config";
import DashboardPageConfig from "./Dashboard/Dashboard.Config";
import ProcessingSchedulePageConfig from "./ProcessingSchedule/ProcessingSchedule.Config";
import StatisticalDataPageConfig from "./StatisticalData/StatisticalData.Config";
import StatuteRegulationPageConfig from "./StatuteRegulation/StatuteRegulation.Config";
import PostulatePageConfig from "./Postulate/Postulate.Config";

const routes = [
  DashboardPageConfig, //no mover de la posicion del array
  AnnouncementPageConfig,
  Error404PageConfig,
  Error500PageConfig,
  ServicePageConfig,
  ProcessingSchedulePageConfig,
  StatisticalDataPageConfig,
  StatuteRegulationPageConfig,
  PostulatePageConfig,
];
export default routes;
