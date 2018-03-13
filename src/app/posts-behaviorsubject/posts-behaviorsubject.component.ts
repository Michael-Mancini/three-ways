import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Post, GroupPosts } from '../post.interface';

@Component({
  selector: 'app-posts-behaviorsubject',
  templateUrl: '../posts/posts.component.html',
  styleUrls: ['./posts-behaviorsubject.component.css']
})
export class PostsBehaviorsubjectComponent implements OnInit, OnDestroy {
  groupPosts: GroupPosts[];

  // initialize a private variable as a BehaviorSubject
  // property with 'get' and 'set' abilities that can be subscribed to
  private dataB$ = new BehaviorSubject<Post[]>([]);

  @Input()
  set data(value) {
    // set the latest value as the B$
    this.dataB$.next(value);
  };

  get data() {
    // get the latest value from the B$
    return this.dataB$.getValue();
  }

  ngOnInit() {
    // subscribe to the B$ and run grouping logic for every change
    // call takeWhile to automatically unsubscribe after updating
    this.dataB$
      // .takeWhile(() => !this.groupPosts)
      .subscribe(() => {
        this.groupPosts = this.groupByCategory(this.data);
      });
  }

  ngOnDestroy() {
    this.dataB$.unsubscribe();
  }

  groupByCategory(data: Post[]): GroupPosts[] {
    if (!data) return;

    // get unique categories
    const categories = new Set(data.map(x => x.category));

    // produce a list of categories with the posts
    const result = Array.from(categories).map((x) => ({
      category: x,
      posts: data.filter(post => post.category === x)
    }));

    return result;
  }

}
