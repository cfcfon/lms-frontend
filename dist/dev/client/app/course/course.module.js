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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var course_routing_1 = require("./course.routing");
var course_component_1 = require("./course.component");
var course_list_component_1 = require("./course-list/course-list.component");
var edit_course_component_1 = require("./edit-course/edit-course.component");
var edit_xp_component_1 = require("./edit-xp/edit-xp.component");
var edit_badge_component_1 = require("./edit-badge/edit-badge.component");
var edit_student_score_component_1 = require("./edit-student-score/edit-student-score.component");
var edit_students_component_1 = require("./edit-students/edit-students.component");
var edit_student_component_1 = require("./edit-student/edit-student.component");
var course_nav_component_1 = require("./course-nav/course-nav.component");
var print_students_component_1 = require("./print-students/print-students.component");
var update_student_component_1 = require("./update-student/update-student.component");
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                course_routing_1.courseRouting
            ],
            declarations: [
                course_component_1.CourseComponent,
                course_list_component_1.CourseListComponent,
                edit_course_component_1.EditCourseComponent,
                edit_xp_component_1.EditXPComponent,
                edit_badge_component_1.EditBadgeComponent,
                edit_students_component_1.EditStudentsComponent,
                edit_student_score_component_1.EditStudentScoreComponent,
                edit_student_component_1.EditStudentComponent,
                course_nav_component_1.CourseNavComponent,
                update_student_component_1.UpdateStudentComponent,
                print_students_component_1.PrintStudentsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3Vyc2UvY291cnNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLHNDQUFrQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3hFLGtDQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVELHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLDZDQUF3QyxtREFBbUQsQ0FBQyxDQUFBO0FBQzVGLHdDQUFvQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzlFLHVDQUFtQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzNFLHFDQUFpQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3JFLHlDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ2pGLHlDQUFxQywyQ0FBMkMsQ0FBQyxDQUFBO0FBd0JqRjtJQUFBO0lBQTJCLENBQUM7SUFyQjVCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDRCQUFZO2dCQUNaLDhCQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osa0NBQWU7Z0JBQ2YsMkNBQW1CO2dCQUNuQiwyQ0FBbUI7Z0JBQ25CLG1DQUFlO2dCQUNmLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2dCQUNyQix3REFBeUI7Z0JBQ3pCLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixpREFBc0I7Z0JBQ3RCLGlEQUFzQjthQUN2QjtTQUNGLENBQUM7O29CQUFBO0lBQ3lCLG1CQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAvY291cnNlL2NvdXJzZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQge2NvdXJzZVJvdXRpbmd9IGZyb20gXCIuL2NvdXJzZS5yb3V0aW5nXCI7XG5pbXBvcnQge0NvdXJzZUNvbXBvbmVudH0gZnJvbSBcIi4vY291cnNlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3Vyc2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdENvdXJzZUNvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRYUENvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC14cC9lZGl0LXhwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFZGl0QmFkZ2VDb21wb25lbnR9IGZyb20gXCIuL2VkaXQtYmFkZ2UvZWRpdC1iYWRnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdFN0dWRlbnRTY29yZUNvbXBvbmVudH0gZnJvbSBcIi4vZWRpdC1zdHVkZW50LXNjb3JlL2VkaXQtc3R1ZGVudC1zY29yZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RWRpdFN0dWRlbnRzQ29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LXN0dWRlbnRzL2VkaXQtc3R1ZGVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0VkaXRTdHVkZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3Vyc2VOYXZDb21wb25lbnR9IGZyb20gXCIuL2NvdXJzZS1uYXYvY291cnNlLW5hdi5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJpbnRTdHVkZW50c0NvbXBvbmVudH0gZnJvbSBcIi4vcHJpbnQtc3R1ZGVudHMvcHJpbnQtc3R1ZGVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQge1VwZGF0ZVN0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL3VwZGF0ZS1zdHVkZW50L3VwZGF0ZS1zdHVkZW50LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIGNvdXJzZVJvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ291cnNlQ29tcG9uZW50LFxuICAgIENvdXJzZUxpc3RDb21wb25lbnQsXG4gICAgRWRpdENvdXJzZUNvbXBvbmVudCxcbiAgICBFZGl0WFBDb21wb25lbnQsXG4gICAgRWRpdEJhZGdlQ29tcG9uZW50LFxuICAgIEVkaXRTdHVkZW50c0NvbXBvbmVudCxcbiAgICBFZGl0U3R1ZGVudFNjb3JlQ29tcG9uZW50LFxuICAgIEVkaXRTdHVkZW50Q29tcG9uZW50LFxuICAgIENvdXJzZU5hdkNvbXBvbmVudCxcbiAgICBVcGRhdGVTdHVkZW50Q29tcG9uZW50LFxuICAgIFByaW50U3R1ZGVudHNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VNb2R1bGUge31cbiJdfQ==
