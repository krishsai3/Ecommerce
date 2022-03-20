import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';
  
  constructor(){}
  
  ngOnInit(){}

  url:string = "assets/images/iPhone12.jpeg";
  changeImage(event:any){
    this.url=event.target.src;
  }
}

