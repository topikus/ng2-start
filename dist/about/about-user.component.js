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
var router_1 = require("@angular/router");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //grab the curren username
        this.route.data.forEach(function (data) { return _this.user = data.user; });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        template: "\n\t\t<a class=\"btn btn-sm btn-info\" (click)=\"goBack()\">Go Back</a>\n\t\t<div class=\"jumbotron text-center\" *ngIf=\"user\">\n\t\t\t<h1>{{ user.name }} ({{ user.username }})</h1>\n\n\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\n\t\t</div>\n\t",
        styles: ["\n\t\timg {\n\t\t\tmax-width: 50%;\n\t\t\tmargin: 30px auto;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map