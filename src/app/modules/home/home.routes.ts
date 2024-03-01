import {Routes} from "@angular/router";
import {CalendarComponent} from "./pages/calendar/calendar.component";
import {ServicesComponent} from "./pages/services/services.component";
import {DataStatisticComponent} from "./pages/data-statistic/data-statistic.component";
import {StatuteRegulationsComponent} from "./pages/statute-regulations/statute-regulations.component";
import {PostulationComponent} from "./pages/postulation/postulation.component";

export const homesRoutes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path: 'statistics-data',
    component: DataStatisticComponent
  },
  {
    path: 'statues-regulations',
    component: StatuteRegulationsComponent
  },
  {
    path: 'postulation',
    component: PostulationComponent
  },
  {
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  }
]
