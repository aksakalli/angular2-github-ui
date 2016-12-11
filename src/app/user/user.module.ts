import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserEventsComponent } from './user-events/user-events.component';
import { UserCardViewComponent } from './shared/user-card-view/user-card-view.component';
import { UserRecievedEventsComponent } from './user-recieved-events/user-recieved-events.component';


@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule,
    ],
    declarations: [
        UserComponent,
        UserCardViewComponent,
        UserFollowersComponent,
        UserFollowingComponent,
        UserReposComponent,
        UserEventsComponent,
        UserRecievedEventsComponent,
    ],
    providers: [],
})
export class UserModule { }
