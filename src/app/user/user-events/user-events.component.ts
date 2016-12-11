import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../../models';
import { GithubApiService } from '../../core/github-api.service';


@Component({
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent implements OnInit {

  events: Event[] = [];
  page = 1;
  perPage = 20;
  loadButtonDisabled = false;

  constructor(
    private githubApiService: GithubApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  loadEvents() {
    this.route.parent.params
      .switchMap((params: Params) =>
        this.githubApiService.getUserEvents(params['login'], this.page, this.perPage))
      .subscribe(events => {
        if (0 < events.length) {
          this.events = this.events.concat(events);
        }
        else {
          this.loadButtonDisabled = true;
        }
      });
  }

  ngOnInit() {
    this.loadEvents();
  }

  loadMore() {
    this.page++;
    this.loadEvents();
  }

}
