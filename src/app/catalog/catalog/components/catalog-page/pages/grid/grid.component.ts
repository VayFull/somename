import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  data = new BehaviorSubject<Array<string>>(new Array<string>());
  @Input() searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  backendData = [
    'товар 1',
    'товар 2',
    'товар 3'
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.searchValue.pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(data => {
        this.data.next(this.backendData.filter(x => x.includes(data)));
      });

  }

}
