import { Component, input, output } from '@angular/core';
import { Photo } from '../../types/member';

@Component({
  selector: 'app-star-button',
  imports: [],
  templateUrl: './star-button.html',
  styleUrl: './star-button.css',
})
export class StarButton {
  selected = input<boolean>();
  disabled = input<boolean>();
  clickEvent = output<Event>();

}
