import { Component, Input } from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
                .glyphicon-heart {
                    color: #ccc;
                    cursor: pointer;
                }
                
                .resaltado {
                    color: deeppink; 
                }
            
            `]
})
export class LikeComponent {
    @Input() totalLikes=0;
    @Input() iLike = false;
    
    onClick(){
        console.log("corazon clikeado")
        this.iLike=!this.iLike;
        this.totalLikes+= this.iLike ? 1 : -1;                   
    }
    
}