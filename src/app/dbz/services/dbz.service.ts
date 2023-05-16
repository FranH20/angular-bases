import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1100,
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9580,
    },
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 5747,
    },
    {
      id: uuidv4(),
      name: 'Gohan',
      power: 12500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuidv4(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character: Character) => character.id !== id
    );
  }
}
