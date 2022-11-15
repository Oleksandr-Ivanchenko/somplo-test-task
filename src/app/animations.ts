import {
  style,
  animate,
  trigger,
  transition,
  keyframes,
} from '@angular/animations';


export const Animations =
  trigger('imageAnimation', [
    transition('* => slide', [
      animate('2s', keyframes([
          style({ opacity: 0.5, transform: '{{translate}}', offset: 0 }),
          style({ opacity: 1, transform: 'translate(0%)', offset: 0.5 }),
      ]))
    ]),
    transition('* => scale', [
      animate('2s', keyframes([
          style({ opacity: 0.5, transform: 'scale(1)', offset: 0 }),
          style({ opacity: 1, transform: 'scale({{scaleSize}})', offset: 0.5 }),
      ]))
    ]),
  ]);
