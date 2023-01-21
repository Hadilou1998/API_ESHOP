import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./container/register/register.component";
import { LoginComponent } from "./container/login/login.component";
import { ProductComponent } from "./container/product/product.component";
import { ProductContainerComponent } from "./container/product-container/product-container.component";
import { UserComponent } from "./container/user/user.component";
import { AdminComponent } from "./container/admin/admin.component";
import { AuthGuard } from "./common/auth.guard";
import { RoleGuard } from "./common/role.guard";
import { UpdateUserComponent } from "./container/update-user/update-user.component";

const routes: Routes =
[                                                                                                                                                                               
    {   path:   'register'      ,   component   :   RegisterComponent   },
    {   path:   'login'         ,   component   :   LoginComponent      },
    {   path:   'product/:id'   ,   component   :   ProductComponent, canActivate: [AuthGuard]},
    {   path:   'products'      ,   component   :   ProductContainerComponent, canActivate: [AuthGuard]},
    {   path:   'user'          ,   component   :   UserComponent, canActivate: [AuthGuard]},
    {   path:   'user/:id'      ,   component   :   UpdateUserComponent, canActivate: [AuthGuard]},
    {   path:   'admin'         ,   component   :   AdminComponent, canActivate: [RoleGuard, AuthGuard]},
];

@NgModule
({
    imports :   [RouterModule.forRoot(routes)],
    exports :   [RouterModule]
})

export class AppRoutingModule { }
