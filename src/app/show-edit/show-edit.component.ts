import { FormGroup, FormControl, Validators, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../intefaces/show.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-show-edit',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './show-edit.component.html',
  styleUrl: './show-edit.component.css'
})
export class ShowEditComponent {
  @Input()
  public show: Show | null = null;

  @Output()
  public updateShow: EventEmitter<Show> = new EventEmitter();

  @Output()
  public cancelEdit: EventEmitter<void> = new EventEmitter();

  public editForm!: FormGroup;

  ngOnInit() {
    if (this.show) {
      this.editForm = new FormGroup({
        name: new FormControl(this.show.name, Validators.required),
        year: new FormControl(this.show.year, Validators.required),
        episodes: new FormControl(this.show.episodes, Validators.required),
        image: new FormControl(this.show.image, Validators.required),
        description: new FormControl(this.show.description, Validators.required),
        genre: new FormControl(this.show.genre, Validators.required)
      });
    }
  }

  public onSubmit(): void {
    if (this.editForm.valid) {
      this.updateShow.emit(this.editForm.value); // Emitir los cambios del show
    }
  }
  
  public onCancel(): void {
    this.cancelEdit.emit(); // Emitir evento de cancelación
  }
}
