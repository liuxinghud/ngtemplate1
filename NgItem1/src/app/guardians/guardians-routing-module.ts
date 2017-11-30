import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ParentsListComponent } from "./parents-list/parents-list.component";
import { DailyWorksComponent } from "./daily-works/daily-works.component";
import { EditWorksComponent } from "./edit-works/edit-works.component";
import { SummaryComponent } from "./summary/summary.component";


const guardiansRoutes: Routes = [
    {
        path: '',
        redirectTo: '/Parent/List',
        pathMatch: 'full'
    },

    {
        path: 'List',
        component: ParentsListComponent,
    },
    {
        path: 'Edit/:id',
        component: EditWorksComponent,
    },
    {
        path: 'DailyWorks',
        component: DailyWorksComponent,
    },
    {
        path: 'Summary',
        component: SummaryComponent,
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(guardiansRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})

export class GuardiansRoutingModule {
}
