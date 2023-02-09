import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GeneralComponent } from './general/general.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AudienceComponent } from './audience/audience.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GeneralComponent,
    ScheduleComponent,
    AudienceComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
