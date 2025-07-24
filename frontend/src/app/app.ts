import { Component } from '@angular/core';
import { Frontpage } from './frontpage/frontpage';
import { Header} from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Frontpage],
  template: `
    <app-header></app-header>
    <app-frontpage></app-frontpage>
  `
})
export class App {}
