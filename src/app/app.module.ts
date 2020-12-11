import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponentComponent } from './pages/page-component/page-component.component';
import { WidgetPageComponent } from './components/widget-page/widget-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaComponent } from './components/galleria/galleria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PageComponentComponent,
    WidgetPageComponent,
    GalleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
