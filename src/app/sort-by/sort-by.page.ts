import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.page.html',
  styleUrls: ['./sort-by.page.scss'],
})
export class SortByPage implements OnInit {

  sort_by_list: Object[] = [
    { text: 'Near By Location' },
    { text: 'Highest Rated' },
    { text: 'Most Viewed' },
    { text: 'Highest Price' },
    { text: 'Lowest Price' },
  ];

  constructor() { }

  ngOnInit() {
  }

  radioGroupChange(event) {

  }

}
