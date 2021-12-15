import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedServiceService } from 'src/app/services/feed/feed-service.service';
import { SearchService } from 'src/app/services/search/search.service';
import { trie } from './trie';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any = []
  originalPosts: any = []
  private myTrie: trie<string>;
  constructor(public feedService: FeedServiceService,
              public searchService: SearchService) { }

  ngOnInit(): void {
    var newPostArr = [];
    this.feedService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.originalPosts = posts;
    })
    this.searchService.searchListener.subscribe((keyword) => {
      console.log(keyword)
      if(keyword.length === 0){
        this.posts = this.originalPosts;
      } else {
        this.posts.forEach((element: any) => {
          const wordArray =  element.title.split(' ')
          for(var index in wordArray) {
            if(keyword === wordArray[index]){
              newPostArr.push(element);
            }
          }
        });
        this.posts = newPostArr;
      }
    })
  }
}
