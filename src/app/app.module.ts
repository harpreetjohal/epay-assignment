import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routes';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/components/task.component';
import { TaskService } from './task/services/task.services';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
