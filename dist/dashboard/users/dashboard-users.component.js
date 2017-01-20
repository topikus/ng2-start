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
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/services/user.service");
var DashboardUsersComponent = (function () {
    function DashboardUsersComponent(service) {
        this.service = service;
    }
    DashboardUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().then(function (users) { return _this.users = users; });
    };
    return DashboardUsersComponent;
}());
DashboardUsersComponent = __decorate([
    core_1.Component({
        template: "\n\t\t<h2>Users section </h2>\n\t\t<p>Manage you users</p>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div *ngIf=\"users\" class=\"list-group\">\n\t\t\t\t\t<a *ngFor=\"let user of users\" \n\t\t\t\t\t\tclass=\"list-group-item\"\n\t\t\t\t\t\t[routerLink] = \"['/dashboard/users',user.username]\">\n\t\t\t\t\t\t\t{{ user.name }}\n\t\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\tlist of users goes here\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], DashboardUsersComponent);
exports.DashboardUsersComponent = DashboardUsersComponent;
//# sourceMappingURL=dashboard-users.component.js.map