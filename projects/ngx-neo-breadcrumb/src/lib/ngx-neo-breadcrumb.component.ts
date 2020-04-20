import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxNeoBreadcrumbService } from './ngx-neo-breadcrumb.service';

@Component({
    selector: 'neo-breadcrumb',
    templateUrl: './ngx-neo-breadcrumb.component.html',
    styles: []
})
export class NgxNeoBreadcrumbComponent implements OnInit {
    @Input() useBootstrap: boolean = true;
    @Input() prefix:       string  = '';

    public _urls: string[];
    public _routerSubscription: any;

    constructor(private router: Router, private breadcrumbService: NgxNeoBreadcrumbService) {}

    ngOnInit(): void {
        this._urls = new Array();

        if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }

        if (this.router.navigated) {
            this._urls.length = 0; //Fastest way to clear out array
            this.generateBreadcrumbTrail(this.router.routerState.snapshot.url);
        }

        this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            if (navigationEnd instanceof NavigationEnd) {
                this._urls.length = 0; //Fastest way to clear out array
                this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
            }
        });
    }

    ngOnChanges(changes: any): void {
        if (!this._urls) {
            return;
        }

        this._urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    }

    generateBreadcrumbTrail(url: string): void {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }

        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        } else if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

    ngOnDestroy(): void {
        this._routerSubscription.unsubscribe();
    }


}
