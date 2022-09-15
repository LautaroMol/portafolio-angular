import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route:string) {
    return this.router.url === route;
  }

}
