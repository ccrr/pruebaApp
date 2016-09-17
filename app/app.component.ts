import {Component} from 'angular2/core'
import {FavoritoComponent} from './favorito.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'my-app',
    template: `
            <h1>Hola Angular</h1>
            <i class="glyphicon glyphicon-star"></i>
            <favorito [isFavorito]="post.isFavorito" (change)="onFavoritoChange ($event)"></favorito>
            <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
            
            `,
            directives: [FavoritoComponent, LikeComponent]

})
export class AppComponent {
    post={
        tile: "Title",
        isFavorito: true
    }
    
    onFavoritoChange($event){
        console.log($event);
    }
    
    tweet = {
        totalLikes:10,
        iLike:true
    }
    
 }