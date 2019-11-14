import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string
  @Input() postContent: string
  @Input() postLoveIts: number
  @Input() postDate: any

  constructor() { }

  ngOnInit() {
  }

  // ++++++++ change selon le nb de loveIts
  // ++++++++++++ d'affichage list bootstrap
  getColorList() {
    if (this.postLoveIts > 0) {
      return 'list-group-item list-group-item-success'
    } else if (this.postLoveIts < 0) {
      return 'list-group-item list-group-item-danger'
    } else {
      return 'list-group-item'
    }
  }
  // ++++++++++++ de couleur de la police
  getColorFont() {
    if (this.postLoveIts > 0) {
      return 'green'
    } else if (this.postLoveIts < 0) {
      return 'red'
    } else {
      return 'black'
    }

    // ++++++++Boutons : +1 ou -1 de postLoveIts
  }
  onLoveIt() {
    this.postLoveIts += 1
  }

  onDislikeIt() {
    this.postLoveIts -= 1
  }

}
