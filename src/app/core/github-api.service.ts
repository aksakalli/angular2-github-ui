import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';

import { User, Repo, Event, EventType } from '../models';

declare function escape(s: string): string;

@Injectable()
export class GithubApiService {

    private apiURL = 'https://api.github.com'
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http
    ) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getUser(login: string): Promise<User> {
        return this.http
            .get(`${this.apiURL}/users/${login}`)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    getUserFollowers(login: string, page = 1, perPage: number): Promise<User[]> {
        return this.http
            .get(`${this.apiURL}/users/${login}/followers?page=${page}&per_page=${perPage}`)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUserFollowing(login: string, page = 1, perPage: number): Promise<User[]> {
        return this.http
            .get(`${this.apiURL}/users/${login}/following?page=${page}&per_page=${perPage}`)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    getUserRepos(login: string, page = 1, perPage: number): Promise<Repo[]> {
        return this.http
            .get(`${this.apiURL}/users/${login}/repos?page=${page}&per_page=${perPage}&sort=updated`)
            .toPromise()
            .then(response => response.json() as Repo[])
            .catch(this.handleError);
    }

    getUserEvents(login: string, page = 1, perPage: number): Promise<Event[]> {
        return this.http
            .get(`${this.apiURL}/users/${login}/events?page=${page}&per_page=${perPage}&sort=updated`)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    getUserRecievedEvents(login: string, page = 1, perPage: number): Promise<Event[]> {
        return this.http
            .get(`${this.apiURL}/users/${login}/received_events?page=${page}&per_page=${perPage}&sort=updated`)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    getRepo(owner: string, repoName: string): Promise<Repo> {
        return this.http
            .get(`${this.apiURL}/repos/${owner}/${repoName}`)
            .toPromise()
            .then(response => response.json() as Repo)
            .catch(this.handleError);
    }

    getRepoReadme(owner: string, repoName: string): Promise<string> {
        return this.http
            .get(`${this.apiURL}/repos/${owner}/${repoName}/readme`)
            .toPromise()
            .then(r => {
                let s: string = r.json().content;
                s = s.replace(/\s/g, '');
                return decodeURIComponent(escape(atob(s)))

            })
            .catch(this.handleError);
    }

    getRepoEvents(owner: string, repoName: string, page = 1, perPage: number): Promise<Event[]> {
        return this.http
            .get(`${this.apiURL}/repos/${owner}/${repoName}/events?page=${page}&per_page=${perPage}`)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    getPopularRepos(from: Date): Promise<Repo[]> {
        let formattedDate = moment(from).format('YYYY-MM-DD');
        return this.http
            .get(`${this.apiURL}/search/repositories?q=created:>${formattedDate}&sort=stars`)
            .toPromise()
            .then(response => response.json().items as Repo[])
            .catch(this.handleError);
    }

    searchRepos(q: string): Promise<Repo[]> {
        if (q === '') {
            return Observable.of([]).toPromise();
        }

        return this.http
            .get(`${this.apiURL}/sssearch/repositories?q=${q}`)
            .toPromise()
            .then(response => response.json().items as Repo[])
            .catch(this.handleError);
    }
}
