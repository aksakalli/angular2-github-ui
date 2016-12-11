export class User {
    login: string;
    id: 1939193;
    avatar_url: URL;
    html_url: URL;
    // followers: User[];
    //following: User[];
    // gists: Gist;
    // starred: Repository[];
    // subscriptions: Repository[];
    // organizations: Organizations[];
    // repos: Repository[];
    // events: Event[];
    received_events: Event[];
    site_admin: boolean;
    name: string;
    company: string;
    blog: URL;
    location: string;
    email: string;
    hireable?: boolean;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}
