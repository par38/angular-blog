import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ++++++++ reception de props détaillées ++++++++
  // @Input() postTitle: string
  // @Input() postContent: string
  // @Input() postLoveIts: number
  // @Input() postCreated_at: Date

  // ++++++++ reception globale de l'array ++++++++
  @Input() post: any

}
