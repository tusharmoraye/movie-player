import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input('movie') movie:Movie;

  constructor() { }

  ngOnInit() {
  }

}
