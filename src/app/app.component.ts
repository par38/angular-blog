import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // + array comprenant tous les posts, valeur initiale
  // + AU PLURIEL pour l'utiliser avec le *ngFor
  posts = [
    {
      title: 'Mon premier post',
      content: `Information : je vous conseille d'utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item.`,
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: `Quand un post a plus de "love it" que de "don't love it" (loveIts > 0), il sera coloré en vert, et inversement quand loveIts < 0, il sera coloré en rouge.`,
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Encore un post',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, turpis et malesuada ultricies, libero leo facilisis nulla, sit amet mattis metus dolor nec tortor. Aliquam commodo mi ac elit aliquet, ut euismod nibh commodo. Proin sodales odio eu viverra pretium. Vestibulum feugiat nibh ante, nec dictum leo pretium in. Duis elementum mauris eget felis tincidunt, ut pellentesque neque lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris rutrum libero sed arcu dignissim tincidunt. Cras a fermentum nisi, nec pharetra odio. Praesent non rutrum lorem. Pellentesque sagittis, leo quis viverra auctor, tortor justo luctus augue, ut ullamcorper mi justo ac elit. `,
      loveIts: 0,
      created_at: Date()
    }
  ]
}
