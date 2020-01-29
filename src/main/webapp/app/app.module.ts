import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Hipster6SharedModule } from 'app/shared/shared.module';
import { Hipster6CoreModule } from 'app/core/core.module';
import { Hipster6AppRoutingModule } from './app-routing.module';
import { Hipster6HomeModule } from './home/home.module';
import { Hipster6EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Hipster6SharedModule,
    Hipster6CoreModule,
    Hipster6HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Hipster6EntityModule,
    Hipster6AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class Hipster6AppModule {}
