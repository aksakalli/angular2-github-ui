import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LargeNumberShortenPipe } from './large-number-shorten.pipe';
import { MarkdownToHtmlPipe } from './markdown-to-html.pipe';
import { FromNowPipe } from './from-now.pipe';
import { EventCardViewComponent } from './event-card-view/event-card-view.component';
import { RepoSearchBoxComponent } from './repo-search-box/repo-search-box.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LargeNumberShortenPipe,
        MarkdownToHtmlPipe,
        FromNowPipe,
        EventCardViewComponent,
        RepoSearchBoxComponent,
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        LargeNumberShortenPipe,
        MarkdownToHtmlPipe,
        FromNowPipe,
        EventCardViewComponent,
        RepoSearchBoxComponent,
    ]
})
export class SharedModule { }
