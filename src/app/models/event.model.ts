import { User } from './user.model';
import { Repo } from './repo.model';

export class Event {
    id: number;
    type: EventType;
    actor: User;
    repo: Repo;
    payload: any;
    public: boolean;
    created_at: Date;
}

export enum EventType {
    CommitCommentEvent,
    CreateEvent,
    DeleteEvent,
    DeploymentEvent,
    DeploymentStatusEvent,
    DownloadEvent,
    FollowEvent,
    ForkEvent,
    ForkApplyEvent,
    GistEvent,
    GollumEvent,
    IssueCommentEvent,
    IssuesEvent,
    LabelEvent,
    MemberEvent,
    MembershipEvent,
    MilestoneEvent,
    OrganizationEvent,
    PageBuildEvent,
    PublicEvent,
    PullRequestEvent,
    PullRequestReviewEvent,
    PullRequestReviewCommentEvent,
    PushEvent,
    ReleaseEvent,
    RepositoryEvent,
    StatusEvent,
    TeamEvent,
    TeamAddEvent,
    WatchEvent,
}