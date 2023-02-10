import { GeneralComponent } from "./general/general.component";
import { provideRouter } from "@angular/router";

const APP_ROUTES = [
    { path: 'general', component: GeneralComponent }
];

export const APP__ROUTES_PROVIDER = [provideRouter(APP_ROUTES)];