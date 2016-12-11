import { Component, Input } from '@angular/core';
import { Event } from '../../models';

@Component({
  selector: 'app-event-card-view',
  templateUrl: './event-card-view.component.html',
  styleUrls: ['./event-card-view.component.scss']
})
export class EventCardViewComponent {

  constructor() { }

  @Input()
  event: Event;

}
