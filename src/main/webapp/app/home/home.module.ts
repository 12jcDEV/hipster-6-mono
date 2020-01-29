import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Hipster6SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Hipster6SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Hipster6HomeModule {}
