"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var ng2_imageupload_1 = require("ng2-imageupload");
//PrimeNG Module
var growl_1 = require("primeng/components/growl/growl");
var header_component_1 = require("../header/header.component");
var control_messages_component_1 = require("./control-messages.component");
var footer_component_1 = require("../footer/footer.component");
var validation_service_1 = require("../services/validation.service");
var app_routes_1 = require("../app.routes");
var teacher_service_1 = require("../services/teacher.service");
var teach_nav_component_1 = require("../teach/teach-nav/teach-nav.component");
var course_service_1 = require("../services/course.service");
var filterdata_pipe_1 = require("./pipes/filterdata.pipe");
var student_service_1 = require("../services/student.service");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [
                app_routes_1.appRoutingProviders,
                validation_service_1.ValidationService,
                teacher_service_1.TeacherService,
                course_service_1.CourseService,
                student_service_1.StudentService
            ]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                ng2_imageupload_1.ImageUploadModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                growl_1.GrowlModule,
                ng2_imageupload_1.ImageUploadModule,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                teach_nav_component_1.TeachNavComponent,
                control_messages_component_1.ControlMessagesComponent,
                filterdata_pipe_1.FilterData
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
