import { User } from './user.model';

export class Repo {
    id: number;
    owner: Repo;
    name: string;
    full_name: string;
    description: string;
    private: boolean;
    fork: boolean;
    html_url: string;
    clone_url: string;
    git_url: string;
    mirror_url: string;
    ssh_url: string;
    homepage: string;
    svn_url: string;
    language?: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    default_branch: string;
    open_issues_count: number;
    has_issues: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_downloads: boolean;
    pushed_at: Date;
    created_at: Date;
    updated_at: Date;
    permissions: {
        admin: boolean;
        push: boolean;
        pull: boolean
    };
}