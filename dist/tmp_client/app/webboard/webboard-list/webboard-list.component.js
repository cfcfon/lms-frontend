"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var WebboardListComponent = (function () {
    function WebboardListComponent() {
    }
    WebboardListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'webboard-list',
            template: "<div class=\"container\">          <div class=\"card link\" routerLink=\"/webboard/post\">             <div class=\"card-block\">                 <h4 class=\"card-title\">Special title treatment</h4>                 <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>                 <div class=\"text-muted\">                     2 days ago                 </div>             </div>         </div>         <div class=\"card link\" routerLink=\"/webboard/post\">             <div class=\"card-block\">                 <h4 class=\"card-title\">Special title treatment</h4>                 <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>                 <div class=\"text-muted\">                     2 days ago                 </div>             </div>         </div>         <div class=\"card link\" routerLink=\"/webboard/post\">             <div class=\"card-block\">                 <h4 class=\"card-title\">Special title treatment</h4>                 <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>                 <div class=\"text-muted\">                     2 days ago                 </div>             </div>         </div> </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], WebboardListComponent);
    return WebboardListComponent;
}());
exports.WebboardListComponent = WebboardListComponent;
