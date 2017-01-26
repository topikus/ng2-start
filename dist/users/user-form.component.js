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
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.newUser = new user_1.User();
    }
    UserFormComponent.prototype.onSubmit = function () {
        console.log('Are you working?' + this.newUser.name);
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        template: "\n\t\t<form #form=\"ngForm\" (submit)=\"onSubmit()\">\n\n\t\t{{ form.valid }}\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': name.invalid && name.touched }\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" required\n\t\t\t\t\t   [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n\n\t\t\t\t<span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required</span>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': username.invalid && username.touched }\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required\n\t\t\t\t\t\t[(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n\n\t\t\t\t<span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Username is required</span>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled] = \"form.invalid\">\n\t\t\t\tCreate User\n\t\t\t</button>\n\t\t</form>\n\t",
        styles: ["\n\t\tform {\n\t\t\tpadding: 10px;\n\t\t\tbackground: #ECF0F1;\n\t\t\tborder-radius: 3px;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map