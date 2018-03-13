import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blogger',
  template: `
    <h1>{{ title }}</h1>
    <h3>Solution 1: *ngIf</h3>
    <div *ngIf="posts">
      <app-posts [data]="posts"></app-posts>
    </div>
    <hr>
    <h3>Solution 2: ngOnChanges</h3>
    <div>
      <app-posts-onchanges [data]="posts"></app-posts-onchanges>
    </div>
    <hr>
    <h3>Solution 3: Rxjs Behavior Subject</h3>
    <div>
      <app-posts-behaviorsubject [data]="posts"></app-posts-behaviorsubject>
    </div>
    <hr>
  `
})
export class BloggerComponent implements OnInit {
  title = 'Three ways';
  posts: Post[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts()
      .subscribe(res => this.posts = res);
  }

  getPosts(): Observable<Post[]> {
    const url = 'assets/mock-posts.json';
    return this.http.get<Post[]>(url);
  }

}
