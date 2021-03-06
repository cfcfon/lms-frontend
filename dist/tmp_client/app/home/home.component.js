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
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth/auth.service");
var http_1 = require('@angular/http');
var HomeComponent = (function () {
    function HomeComponent(router, authService, http) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.images = new Array(8);
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn() && this.authService.checkRole()) {
            this.router.navigate(["/teach"]);
        }
        else if (this.authService.isLoggedIn() && !this.authService.checkRole()) {
            this.router.navigate(["/student/dashboard"]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tb-home',
            template: "<div class=\"lms-body\">    <div class=\"container\">     <div class=\"row section-introduction\">       <h1 class=\"text-center\">         {{'Gamified Classrooms' | uppercase}}       </h1>     </div>   </div>    <div class=\"jumbotron section-1 pull-left\">     <div class=\"container\">       <!--<h2 class=\"title\">E-learning : LMS</h2>-->       <p class=\"lead\">         Learning Management System with Gamification concepts <br>         The simple way to build an amazing classroom community <br>         Used in 2 in 3 US schools | Always free for teachers       </p>     </div>   </div>    <div class=\"jumbotron section-2 pull-right\">     <div class=\"container\">       <!--<h2 class=\"title\">copyright</h2>-->       <p class=\"lead\">         <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> copyright <br>         \u0E2A\u0E33\u0E19\u0E31\u0E01\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E21\u0E2B\u0E32\u0E27\u0E34\u0E17\u0E22\u0E32\u0E25\u0E31\u0E22\u0E28\u0E23\u0E35\u0E19\u0E04\u0E23\u0E34\u0E19\u0E17\u0E23\u0E27\u0E34\u0E42\u0E23\u0E12 (\u0E15\u0E31\u0E49\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E2A\u0E32\u0E19\u0E21\u0E34\u0E15\u0E23) <br>         \u0E2D\u0E32\u0E04\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21 \u0E2B\u0E25\u0E27\u0E07\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E1E\u0E38\u0E17\u0E18\u0E34 (Learning Tower) <br>         114 \u0E0B\u0E2D\u0E22\u0E2A\u0E38\u0E02\u0E38\u0E21\u0E27\u0E34\u0E17 23 \u0E16\u0E19\u0E19\u0E2A\u0E38\u0E02\u0E38\u0E21\u0E27\u0E34\u0E17 \u0E41\u0E02\u0E27\u0E07\u0E04\u0E25\u0E2D\u0E07\u0E40\u0E15\u0E22\u0E40\u0E2B\u0E19\u0E37\u0E2D \u0E40\u0E02\u0E15\u0E27\u0E31\u0E12\u0E19\u0E32 \u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23 10110 <br>         \u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C 0 2649 5000 \u0E15\u0E48\u0E2D 15452         \u0E42\u0E17\u0E23\u0E2A\u0E32\u0E23 0 2204 2709       </p>     </div>   </div>  </div>",
            styles: ["html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.btn{border:none;outline:none!important}.btn-back{margin-top:-5px}.btn-gray{background-color:#f0f2f1;color:#000}.btn-white{background-color:#fff;color:#000}.btn-green{background-color:#87c97f;color:#fff}.btn-info{background-color:#83c7d4;color:#fff}.btn-orenge{background-color:#fd8455;color:#fff}.progress,.progress-bar{height:10px;font-size:10px;line-height:10px;margin-bottom:0;border:none;box-shadow:none}.progress-bar-info{background-color:#83c7d4}.progress-bar-success{background-color:#87c97f}.progress-bar-warning{background-color:#eec820}.progress-bar-danger{background-color:#ff4a46}.panel-default{max-height:150px;min-height:150px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px}.panel-default>.panel-heading{background-color:transparent;border:none;border-radius:3px;text-align:center}.panel-title{font-weight:700;margin-bottom:5px}.panel-body{text-align:center}.panel-footer{background-color:transparent;border:none}.badge{font-size:18px;color:#fff;background-color:#eec820!important}.on-checked{cursor:pointer}.lms-body,body{overflow-x:hidden;background-color:#f0f2f1!important;color:#1e394f}.btn,.lms-body,.modal,.modal-body,.modal-header,.nav,.section-header-link,.section-header-title,a,body,h1,h2,h3,h4,h5,input,label,p,small{font-family:Kanit,sans-serif!important;font-weight:400!important}.lms-body{padding-top:45px;padding-bottom:90px}.line-breaks{margin-bottom:5px}.card{margin:0 auto;margin-bottom:.75rem}.text-center{text-align:center}.center{margin:0 auto}a,a:hover{cursor:pointer}.leader-tag{position:absolute;left:-15px;top:-25px;padding:5px 2.5px;border-radius:10em;width:30px}.step-tag{padding:5px}.ng-invalid.ng-dirty.ng-touched{border-color:#ebcccc;outline-color:#ebcccc}.ng-valid.ng-dirty{border-color:#5bc0de;outline-color:#5bc0de}.jumbotron,.navbar{border-radius:0}:focus{outline:none!important}.box-wrapper{transition:all .3s cubic-bezier(.25,.8,.25,1);margin-bottom:45px;padding:15px;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;border-radius:3px;display:block;margin:0 auto;overflow-y:hidden}textarea{resize:none!important}.clear{clear:both}.pull-left{float:left;clear:both}.pull-right{float:right;clear:both}.scrollable-content{overflow-x:hidden;max-height:350px;padding:2rem;overflow-y:scroll}.scrollable-content::-webkit-scrollbar{width:10px;border-radius:10px}.scrollable-content::-webkit-scrollbar *{background:transparent;border-radius:10px}.scrollable-content::-webkit-scrollbar-thumb{background:#848484!important;border-radius:10px}.rowTable,.tdTable,.thTable{padding-top:5px;padding-bottom:5px;margin-bottom:5px}.thTable{background-color:#f0f2f1}.tdTable{border-bottom:1px solid #f0f2f1}:host/deep/.ui-growl-item-container.ui-state-highlight.ui-growl-message-success{background-color:#87c97f;border-color:#87c97f}:host /deep/ .ui-resizable-se{display:none}:host /deep/ .ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow{position:fixed;padding:0;overflow:hidden;width:500px}body{background-color:#f0f2f1}.jumbotron{color:#fff}@media screen and (min-width:320px){.title{margin-top:15px;padding-bottom:45px}}@media screen and (min-width:480px){.title{margin-top:15px;padding-bottom:45px}}@media screen and (min-width:641px){.title{margin-top:15px;padding-bottom:45px}}@media screen and (min-width:1025px){.title{margin-top:-15px;padding-bottom:45px}}.section,.section-1,.section-2,.section-3,.section-4{width:75%}@media screen and (min-width:320px){.section,.section-1,.section-2,.section-3,.section-4{padding:15px}}@media screen and (min-width:480px){.section,.section-1,.section-2,.section-3,.section-4{padding:15px}}@media screen and (min-width:641px){.section,.section-1,.section-2,.section-3,.section-4{padding:15px}}@media screen and (min-width:1025px){.section,.section-1,.section-2,.section-3,.section-4{padding:45px}}.section-introduction{padding-top:45px;padding-bottom:45px}.section-1{background-color:#eec820}.section-2{background-color:#83c7d4;text-align:right}.section-3{background-color:#87c97f}.section-4{background-color:#1e394f;text-align:right}.section-5{padding-bottom:45px;background-color:#fff;width:100%} /*# sourceMappingURL=home.component.css.map */"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
