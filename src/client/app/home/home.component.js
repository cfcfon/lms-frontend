"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.images = new Array(6);
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn() && this.authService.checkRole()) {
            this.router.navigate(["/teach"]);
        }
        else if (this.authService.isLoggedIn() && !this.authService.checkRole()) {
            this.router.navigate(["/student/dashboard"]);
        }
        else {
            this.router.navigate(["/auth/signin"]);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
