import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  data = new BehaviorSubject<Array<string>>(new Array<string>());
  @Input() searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {
  }

  ngOnInit(): void {
    this.searchValue.subscribe(_ => this.data.value.push(_));
  }

}
