import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Event } from '../../models';
import { GithubApiService } from '../../core/github-api.service';

@Component({
  selector: 'app-repo-events',
  templateUrl: './repo-events.component.html',
  styleUrls: ['./repo-events.component.scss']
})
export class RepoEventsComponent implements OnInit {

  events: Event[] = [];
  page = 1;
  perPage = 20;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.route.parent.params
      .switchMap((p: Params) => this.githubApiService.getRepoEvents(p['owner'], p['name'], this.page, this.perPage))
      .subscribe(e => this.events = this.events.concat(e));
  }

  loadMore() {
    this.page++;
    this.loadEvents();
  }

}
