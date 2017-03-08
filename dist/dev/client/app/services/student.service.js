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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var config_1 = require('./config');
var xhr_headers_1 = require("./xhr-headers");
var auth_service_1 = require("../auth/auth.service");
var StudentService = (function () {
    function StudentService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.students = [];
    }
    StudentService.prototype.getStudent = function (id) {
        return this.http.get(config_1.apiUrl + "student/" + id + "?token=" + this.authService.token)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.getStudentBadge = function (id) {
        return this.http.get(config_1.apiUrl + "student/" + id + "/badge?token=" + this.authService.token)
            .map(function (res) { return res.json().data.badge; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.updateStudentsScore = function (students) {
        var body = JSON.stringify(students);
        return this.http.post(config_1.apiUrl + "students/update/score?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.updateStudentsBadge = function (students) {
        var body = JSON.stringify(students);
        return this.http.post(config_1.apiUrl + "students/update/scoreandbadge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.editStudent = function (student) {
        var body = JSON.stringify(student);
        return this.http.put(config_1.apiUrl + "student/edit?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.editStudentProfile = function (student) {
        var body = JSON.stringify(student);
        return this.http.put(config_1.apiUrl + "student/edit/profile?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.deleteStudent = function (student) {
        var body = JSON.stringify(student);
        return this.http.post(config_1.apiUrl + "students/delete?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService.prototype.deleteStudentBadge = function (badge) {
        var body = JSON.stringify(badge);
        console.log(body);
        return this.http.post(config_1.apiUrl + "student/delete/badge?token=" + this.authService.token, body, xhr_headers_1.xhrHeaders())
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zdHVkZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFDckUsMkJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFFakQsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQyx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFDaEMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEwQixzQkFBc0IsQ0FBQyxDQUFBO0FBS2pEO0lBS0Usd0JBQXFCLElBQVUsRUFBVyxXQUF3QjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGbEUsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUU0QyxDQUFDO0lBRXRFLG1DQUFVLEdBQVYsVUFBWSxFQUFPO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxlQUFNLGdCQUFXLEVBQUUsZUFBVSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQU8sQ0FBQzthQUMzRSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzthQUM3QixLQUFLLENBQUMsVUFBQyxLQUFTLElBQUssT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBaUIsRUFBTztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksZUFBTSxnQkFBVyxFQUFFLHFCQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLEtB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O0lBakVIO1FBQUMsaUJBQVUsRUFBRTs7c0JBQUE7SUFvRWIscUJBQUM7QUFBRCxDQW5FQSxBQW1FQyxJQUFBO0FBbkVZLHNCQUFjLGlCQW1FMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvc3R1ZGVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcywgSnNvbnB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHt4aHJIZWFkZXJzfSBmcm9tIFwiLi94aHItaGVhZGVyc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuLi9tb2RlbHMvc3R1ZGVudFwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHVkZW50U2VydmljZSB7XG5cbiAgc3R1ZGVudDogU3R1ZGVudDtcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHAsICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBnZXRTdHVkZW50IChpZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHthcGlVcmx9c3R1ZGVudC8ke2lkfT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YClcbiAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKS5kYXRhKVxuICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuICBnZXRTdHVkZW50QmFkZ2UgKGlkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2FwaVVybH1zdHVkZW50LyR7aWR9L2JhZGdlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpLmRhdGEuYmFkZ2UpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG5cbiAgdXBkYXRlU3R1ZGVudHNTY29yZShzdHVkZW50czogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudHMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9c3R1ZGVudHMvdXBkYXRlL3Njb3JlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIHVwZGF0ZVN0dWRlbnRzQmFkZ2Uoc3R1ZGVudHM6IGFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN0dWRlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7YXBpVXJsfXN0dWRlbnRzL3VwZGF0ZS9zY29yZWFuZGJhZGdlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIGVkaXRTdHVkZW50KHN0dWRlbnQ6IGFueSk6IE9ic2VydmFibGU8U3R1ZGVudD57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHthcGlVcmx9c3R1ZGVudC9lZGl0P3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG4gIGVkaXRTdHVkZW50UHJvZmlsZShzdHVkZW50OiBhbnkpOiBPYnNlcnZhYmxlPFN0dWRlbnQ+e1xuICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3R1ZGVudCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7YXBpVXJsfXN0dWRlbnQvZWRpdC9wcm9maWxlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG5cbiAgZGVsZXRlU3R1ZGVudChzdHVkZW50OiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdHVkZW50KTtcbiAgICAvL2NvbnNvbGUubG9nKGJvZHkpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHthcGlVcmx9c3R1ZGVudHMvZGVsZXRlP3Rva2VuPSR7dGhpcy5hdXRoU2VydmljZS50b2tlbn1gLCBib2R5LCB4aHJIZWFkZXJzKCkpXG4gICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgfVxuXG5cbiAgZGVsZXRlU3R1ZGVudEJhZGdlKGJhZGdlOiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShiYWRnZSk7XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke2FwaVVybH1zdHVkZW50L2RlbGV0ZS9iYWRnZT90b2tlbj0ke3RoaXMuYXV0aFNlcnZpY2UudG9rZW59YCwgYm9keSwgeGhySGVhZGVycygpKVxuICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLmNhdGNoKChlcnJvcjphbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gIH1cblxuXG59XG4iXX0=
