import { Component, OnInit } from '@angular/core';
import { FIGURINES } from './figurine-list';
import { Figurine } from './figurine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: 'productlist.component.html',
  styleUrl: 'productlist.component.css'
})

export class ProductlistComponent implements OnInit {
  figurineList: Figurine[] = FIGURINES;
  figurineSelected: Figurine|undefined;

  constructor(private router: Router) {}

  goToFigurine(figurine: Figurine) {
    this.router.navigate(['/figurine', figurine.id]);
  }

  ngOnInit() {
      console.table(this.figurineList);
  }

  selectFigurine(figurineId: string) {
    const figurine: Figurine|undefined = this.figurineList.find(figurine => figurine.id == +figurineId);
  }
}
