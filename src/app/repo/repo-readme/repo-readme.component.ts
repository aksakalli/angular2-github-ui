import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { GithubApiService } from '../../core/github-api.service';

@Component({
  templateUrl: './repo-readme.component.html',
  styleUrls: ['./repo-readme.component.scss']
})
export class RepoReadmeComponent implements OnInit {

  readme: string;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.parent.params
      .switchMap((p: Params) => this.githubApiService.getRepoReadme(p['owner'], p['name']))
      .subscribe(r => this.readme = r);
  }

}
