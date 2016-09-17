import { Component, Input, Output,EventEmitter } from 'angular2/core'

@Component({
    selector: 'favorito',
    templateUrl: 'app/favorito.template.html',
    styles: [`
                .glyphicon-star {
                    color: orange;
                }
            
            `]
})
export class FavoritoComponent {
    titulo = "Prueba favorito con estrella cr";
    
    @Input() isFavorito=false;
    @Output() change = new EventEmitter();
    onClick(){
        console.log("estrella clickeada"); 
        this.isFavorito=!this.isFavorito;
        this.change.emit({newVaue: this.isFavorito });
    }
}   

