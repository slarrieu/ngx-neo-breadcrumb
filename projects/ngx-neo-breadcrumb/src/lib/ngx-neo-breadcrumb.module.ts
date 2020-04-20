import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxNeoBreadcrumbComponent } from './ngx-neo-breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgxNeoBreadcrumbService } from './ngx-neo-breadcrumb.service';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NgxNeoBreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NgxNeoBreadcrumbComponent
    ]
})
export class NgxNeoBreadcrumbModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxNeoBreadcrumbModule,
            providers: [
                NgxNeoBreadcrumbService
            ]
        };
    }
}
