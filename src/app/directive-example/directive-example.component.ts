import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  dcHeroes:string[]=['Batman','Superman','Flash','Wonder Women'];

  index:number = 0; 

  toogleHeroFlag:boolean = true;
  selectedHero:string;

  myStyle:{};
	color:string;
	
  styleToogleFlag:boolean = true;

  currentCSSClass:string='styleRed';

  inputColor:string = 'red';

  setCSSClass () {

    if(this.currentCSSClass == 'styleRed')
    {
      this.currentCSSClass = 'styleWhite';
    }
    else {
      this.currentCSSClass = 'styleRed';
    }
    console.log(this.currentCSSClass);
  }



  setStyle() {
    this.myStyle= {
      'font-weight': this.styleToogleFlag ? 'bold' : 'normal',
			'font-size': this.styleToogleFlag ? '24px' : '15px',
			'color': this.generateRandomColor()
      
    }

    this.styleToogleFlag = !this.styleToogleFlag;
  }

    //#ffffff
  generateRandomColor() {
    this.color ='#';
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i=0; i<6; i++){
      this.color += letters[Math.floor(Math.random()*16)];
    }
    console.log(this.color);
    return this.color;
  }

  selectHero(hero) {
    this.selectedHero = hero;
    console.log(hero);
  }

  toogleHero() {
    this.toogleHeroFlag = !this.toogleHeroFlag;
  }

  constructor() { }

  ngOnInit() {
  }

}
