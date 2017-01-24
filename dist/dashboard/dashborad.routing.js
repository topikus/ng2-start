"use strict";
var router_1 = require("@angular/router");
var dashboard_section_component_1 = require("./dashboard-section.component");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_users_component_1 = require("./users/dashboard-users.component");
var dashboard_user_details_component_1 = require("./users/dashboard-user-details.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
var auth_guard_service_1 = require("../shared/guards/auth-guard.service");
var can_deactivate_guard_service_1 = require("../shared/guards/can-deactivate-guard.service");
exports.dashboardRoutes = [
    {
        path: '',
        component: dashboard_section_component_1.DashboardSectionComponent,
        children: [
            {
                path: '',
                canActivate: [auth_guard_service_1.AuthGuard],
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'users',
                canActivateChild: [auth_guard_service_1.AuthGuard],
                component: dashboard_users_component_1.DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                        component: dashboard_user_details_component_1.DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.dashboardRoutes);
//# sourceMappingURL=dashborad.routing.js.map