import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private http: Http, private router: Router) {
    this.routeLinks = [
      {
        label: 'Product 1',
        link: './product1',
        index: 0
      }, {
        label: 'Product 2',
        link: './product2',
        index: 1
      }, {
        label: 'Product 3',
        link: './product3',
        index: 2
      }, {
        label: 'Product 4',
        link: './product4',
        index: 3
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
