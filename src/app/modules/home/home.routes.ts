import {Routes} from "@angular/router";
import {CalendarComponent} from "./pages/calendar/calendar.component";
import {ServicesComponent} from "./pages/services/services.component";
import {DataStatisticComponent} from "./pages/data-statistic/data-statistic.component";
import {StatuteRegulationsComponent} from "./pages/statute-regulations/statute-regulations.component";
import {PostulationComponent} from "./pages/postulation/postulation.component";
import {AnnouncementComponent} from "./pages/announcement/announcement.component";
import {authGuard} from "../../core/guards/auth.guard";
import {UsersComponent} from "./pages/users/users.component";
import {RequestsComponent} from "./pages/requests/requests.component";

export const homesRoutes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'services',
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
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'announcement',
    component: AnnouncementComponent,
    canActivate: [authGuard],
    data: {
      role: [1]
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard],
    data: {
      role: [1]
    }
  },
  {
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  }
]
