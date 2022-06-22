import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  payload = [];
  products:[] = [];
  constructor() {}

  ngOnInit(): void {
    /* fetch('https://rickandmortyapi.com/api').then((res) => {
      console.log(res);
    });

    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) => {
      this.payload = json.results;
      console.log(this.payload);
    });

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.products = json;
        console.log(json);
      }); */
  }
}
