import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
	@Input()
	cardTitle:string = "";
	@Input()
	cardImage:string = "";
	@Input()
	id:string = "0";
}
