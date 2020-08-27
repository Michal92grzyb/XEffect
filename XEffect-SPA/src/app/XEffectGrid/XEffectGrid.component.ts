import { Component, OnInit } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { mixinColor } from '@angular/material/core';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'app-XEffectGrid',
  templateUrl: './XEffectGrid.component.html',
  styleUrls: ['./XEffectGrid.component.css']
})
export class XEffectGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.CreateTiles();
  }

  tiles: Tile[];

  CreateTiles(){
    this.tiles = [];
    for (let i = 1; i <= 49; i++){

      let num : string = i.toString();
      if (this.CheckIfEven(i)){
        this.tiles.push({text: num, color: 'blue' })
      } else {
        this.tiles.push({text: num, color: 'red' })
      }
    }
  }

  CheckIfEven(num : number)
  {
    let check : Boolean = num % 2 == 1 ? false : true;
    return check;
  }
}
