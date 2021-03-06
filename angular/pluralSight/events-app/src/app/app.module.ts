import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-detail/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  providers: [
    EventService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
