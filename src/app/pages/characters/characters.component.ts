import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
characters = new Array();
searchTerm = '';
searchText = '';
allCharacters = [];
filteredCharacters: any = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
    .subscribe(res => {
      this.characters = res.results;
     // console.log(res)
      //console.log(this.characters);
    });
  }

  search(value: string): void {
    this.filteredCharacters = this.characters.filter((val:any) => {
      //val.name.toLowerCase().includes(value)
      val.name === value;
    })
    console.log(this.filteredCharacters)
  }

}
