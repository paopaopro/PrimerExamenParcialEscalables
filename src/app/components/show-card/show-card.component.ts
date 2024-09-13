import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Show } from '../../intefaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  public deleteCard: EventEmitter<string> = new EventEmitter();

  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter();

  @Input()
  public show: Show = {
    description: "",
    episodes: 0,
    genre: "",
    image: "",
    likes: [],
    name: "",
    year: 0
  };

  public isSelected: boolean = false;

  public changeSelected(): void {
    this.isSelected = !this.isSelected;
  }

  public onDeleteCard(){
   this.deleteCard.emit(this.show.name);
  }

  public onEditCard(): void {
    this.editCard.emit(this.show);
  }
}
