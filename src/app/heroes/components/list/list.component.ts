import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesNames: string[] = [
    'Spiderman', 'Hulk', 'Ironman', 'Thor'
  ]

  public deletedHeroe?: string
  public messageError: string = 'No ha borrado nada';

  removeLastHeroe(): void {
    this.deletedHeroe = this.heroesNames.pop()
    if(this.heroesNames.length == 0) {
      this.deletedHeroe = undefined
      this.messageError = ''
    }
  }
}
