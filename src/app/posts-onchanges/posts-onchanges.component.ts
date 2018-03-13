import { Component, OnChanges, Input, SimpleChanges, OnInit } from '@angular/core';
import { Post, GroupPosts } from '../post.interface';

@Component({
  selector: 'app-posts-onchanges',
  templateUrl: '../posts/posts.component.html',
  styleUrls: ['./posts-onchanges.component.css']
})
export class PostsOnchangesComponent implements OnInit, OnChanges {
  @Input() data: Post[];

  groupPosts: GroupPosts[];

  ngOnInit() {
    // this.groupPosts = this.groupByCategory(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    // only runs when property 'data' is changed
    // 'changes' is a key-value pair object where 'data' is the key
    if (changes['data']) {
      this.groupPosts = this.groupByCategory(this.data);
    }
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
