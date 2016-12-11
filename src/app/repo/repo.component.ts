import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Repo } from '../models';
import { GithubApiService } from '../core/github-api.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  repo: Repo;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((p: Params) => this.githubApiService.getRepo(p['owner'], p['name']))
      .subscribe(r => this.repo = r);
  }
}
