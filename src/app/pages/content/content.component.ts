import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

	imageUrl:string = "";
	title:string = " ";
	description:string = ""
	private id:string | null = "0";
	constructor(
		private route:ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params =>
			this.id = params.get('id')
		);
		this.setValuesToComponent(this.id);
	}

	setValuesToComponent(id:string | null){
		const result = dataFake.filter(article => article.id == id)[0];

		this.imageUrl = result.photo;
		this.title = result.title;
		this.description = result.description;
	}
}
