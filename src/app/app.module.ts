import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopReposComponent } from './top-repos/top-repos.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    NgbModule.forRoot(),

    CoreModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    TopReposComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
