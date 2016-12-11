import { Component, Input } from '@angular/core';
import { User } from '../../../models';

@Component({
  selector: 'app-user-card-view',
  templateUrl: './user-card-view.component.html',
  styleUrls: ['./user-card-view.component.scss']
})
export class UserCardViewComponent  {

  constructor() { }

  @Input()
  user: User;
}
