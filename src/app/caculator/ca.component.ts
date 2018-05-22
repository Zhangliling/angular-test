import {Component, Input, OnInit, ViewChild} from "@angular/core" ;

@Component({
  selector: 'app-caculator',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.css']
})
export class CaComponent implements OnInit {

   temp: string[] = [];

   display_num = '';

   click(num): void {

     this.temp.push(num);
     console.log( this.temp );

     this.display_num = this.temp.join( '' );
     console.log( this.display_num );
   }
  result(): void {
     this.display_num = eval(this.display_num);
  }
  clear(): void{

     this.temp = [];
     this.display_num = '';
  }
  reverse() : void {
     if (this.display_num.startsWith('-')){
       this.display_num=this.display_num.substring(1,this.display_num.length);
     }
     else {
       this.display_num = '-' + this.display_num;
     }
  }
  back(): void {
     this.display_num = this.display_num.substring(0, this.display_num.length-1);
  }
  ngOnInit(): void {

    console.log(this.temp);
  }

}
