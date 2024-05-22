import { Component, OnInit } from '@angular/core';
import { FIGURINES } from './figurine-list';
import { Figurine } from './figurine';

@Component({
  selector: 'app-productlist',
  templateUrl: 'productlist.component.html',
  styleUrl: 'productlist.component.css'
})

export class ProductlistComponent implements OnInit {
  figurineList: Figurine[] = FIGURINES;
  figurineSelected: Figurine|undefined;

  ngOnInit() {
      console.table(this.figurineList);
  }

  selectFigurine(figurineId: string) {
    const figurine: Figurine|undefined = this.figurineList.find(figurine => figurine.id == +figurineId);
    if(figurine) {
      console.log(`vous avez selectionné cette figurine ${figurine.name}`);
      this.figurineSelected = figurine;
    } else {
      console.log(`Ce gaulois n'existe pas.`);
      this.figurineSelected = figurine;
    }
   
  }
}
