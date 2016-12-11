import { Component, OnInit } from '@angular/core';

import { Repo } from '../models';
import { GithubApiService } from '../core/github-api.service';

@Component({
  selector: 'app-top-repos',
  templateUrl: './top-repos.component.html',
  styleUrls: ['./top-repos.component.scss']
})
export class TopReposComponent implements OnInit {

  repos: Repo[];
  dayInterval: number = 1;

  constructor(
    private githubApiService: GithubApiService,
  ) { }

  ngOnInit() {
    this.loadRepos()
  }

  loadRepos() {
    let d = new Date();
    d.setDate(d.getDate() - this.dayInterval);
    this.githubApiService.getPopularRepos(d).then(r => this.repos = r);
  }

}
