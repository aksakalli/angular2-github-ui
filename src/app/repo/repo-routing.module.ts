import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoComponent } from './repo.component';
import { RepoReadmeComponent } from './repo-readme/repo-readme.component';
import { RepoEventsComponent } from './repo-events/repo-events.component';

const routes: Routes = [
    {
        path: ':owner/:name',
        component: RepoComponent,
        children: [
            { path: '', component: RepoReadmeComponent },
            { path: 'events', component: RepoEventsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepoRoutingModule { }