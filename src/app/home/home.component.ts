import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/Character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'gender', 'origin', 'location', 'image'];
  characters: Character[] = [];
  names: string[] | undefined;
  constructor (private characterService: CharacterService){}

  ngOnInit(): void {
    this.characterService.recuperarPersonajes().subscribe(
      (data) => {
        this.characters = data.results;
      });   
  }


}
