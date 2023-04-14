import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-night-ultimate-werewolf',
  templateUrl: './one-night-ultimate-werewolf.component.html',
  styleUrls: ['./one-night-ultimate-werewolf.component.scss']
})
export class OneNightUltimateWerewolfComponent implements OnInit {
  personNum: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
