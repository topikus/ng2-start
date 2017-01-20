"use strict";
var router_1 = require("@angular/router");
var dashboard_section_component_1 = require("./dashboard-section.component");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_users_component_1 = require("./users/dashboard-users.component");
var dashboard_user_details_component_1 = require("./users/dashboard-user-details.component");
var dashboard_users_home_component_1 = require("./users/dashboard-users-home.component");
exports.dashboardRoutes = [
    {
        path: '',
        component: dashboard_section_component_1.DashboardSectionComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'users',
                component: dashboard_users_component_1.DashboardUsersComponent,
                children: [
                    {
                        path: '',
                        component: dashboard_users_home_component_1.DashboardUsersHomeComponent
                    },
                    {
                        path: ':username',
                        component: dashboard_user_details_component_1.DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(exports.dashboardRoutes);
//# sourceMappingURL=dashborad.routing.js.map