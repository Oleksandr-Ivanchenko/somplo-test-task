import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Animations } from '../animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [Animations],
})

export class MainComponent {
  @Input() image!: string;
  @Input() scale!: FormControl<number | null>;
  @Input() animationParametr!: string;
  @Input() translate!: FormControl<string | null>;
}
