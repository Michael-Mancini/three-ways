import { Component, Input, OnInit } from '@angular/core';
import { Post, GroupPosts } from '../post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  @Input() data: Post[];

  groupPosts: GroupPosts[];

  ngOnInit() {
    this.groupPosts = this.groupByCategory(this.data);
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
