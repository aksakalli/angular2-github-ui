import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RepoComponent } from './repo.component';
import { RepoRoutingModule } from './repo-routing.module';
import { RepoReadmeComponent } from './repo-readme/repo-readme.component';
import { RepoEventsComponent } from './repo-events/repo-events.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RepoRoutingModule,
  ],
  declarations: [
    RepoComponent,
    RepoReadmeComponent,
    RepoEventsComponent,
  ]
})
export class RepoModule { }
