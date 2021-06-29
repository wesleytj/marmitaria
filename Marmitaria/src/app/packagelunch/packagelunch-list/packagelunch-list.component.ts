import { PackageLunch } from './packagelunch-list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packagelunch-list',
  templateUrl: './packagelunch-list.component.html',
  styleUrls: ['./packagelunch-list.component.scss']
})
export class PackagelunchListComponent implements OnInit {

  packages: PackageLunch[] = [
    new PackageLunch('Churrasco', 'Picanha', 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-churrasco-0.png')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
