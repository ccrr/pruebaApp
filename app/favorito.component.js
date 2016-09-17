System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavoritoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoritoComponent = (function () {
                function FavoritoComponent() {
                    this.titulo = "Prueba favorito con estrella";
                    this.isFavorito = false;
                    this.change = new core_1.EventEmitter();
                }
                FavoritoComponent.prototype.onClick = function () {
                    console.log("estrella clickeada");
                    this.isFavorito = !this.isFavorito;
                    this.change.emit({ newVaue: this.isFavorito });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoritoComponent.prototype, "isFavorito", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavoritoComponent.prototype, "change", void 0);
                FavoritoComponent = __decorate([
                    core_1.Component({
                        selector: 'favorito',
                        templateUrl: 'app/favorito.template.html',
                        styles: ["\n                .glyphicon-star {\n                    color: orange;\n                }\n            \n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoritoComponent);
                return FavoritoComponent;
            }());
            exports_1("FavoritoComponent", FavoritoComponent);
        }
    }
});
//# sourceMappingURL=favorito.component.js.map