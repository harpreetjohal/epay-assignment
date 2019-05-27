import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/components/task.component';

const routes: Routes = [
{
  path: "home",
  component: TaskComponent
},
 {
  path: "**", // 404
  redirectTo: "/home",
  pathMatch: "full"
}];

export const appRouting: any = RouterModule.forRoot(routes);
