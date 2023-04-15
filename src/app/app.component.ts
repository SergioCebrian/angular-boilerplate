import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: []
})
export class AppComponent implements OnInit {

    public title = 'Angular Boilerplate';

    constructor() { }

    ngOnInit(){
        this.initApp();
    }

    private initApp(): void {
    }

}
