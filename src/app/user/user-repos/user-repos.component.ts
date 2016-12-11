import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

import { User, Repo } from '../../models';
import { GithubApiService } from '../../core/github-api.service';


@Component({
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {

  repos: Repo[];
  page: number;
  perPage = 51;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    Observable
      .combineLatest(this.route.parent.params, this.route.queryParams)
      .switchMap((ps: Params[]) => {
        this.page = +ps[1]['page'] || 1;
        return this.githubApiService.getUserRepos(ps[0]['login'], this.page, this.perPage)
      })
      .subscribe(repos => this.repos = repos);
  }

}
