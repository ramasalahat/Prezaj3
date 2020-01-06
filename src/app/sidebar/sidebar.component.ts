import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/bundles',     title: 'Bundles',         icon:'nc-box-2',       class: '' },
    { path: '/tasks',     title: 'Tasks',         icon:'nc-paper',       class: '' },
    { path: '/employees',     title: 'Employees',         icon:'nc-hat-3',       class: '' },
    { path: '/messages',     title: 'Messages',         icon:'nc-chat-33',       class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
