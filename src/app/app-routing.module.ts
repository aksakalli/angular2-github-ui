import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopReposComponent } from './top-repos/top-repos.component';

const routes: Routes = [
  { path: '', component: TopReposComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'repo', loadChildren: './repo/repo.module#RepoModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
