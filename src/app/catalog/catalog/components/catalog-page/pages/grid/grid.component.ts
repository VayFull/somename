import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() searchValue: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  backendData: Array<Product> =
    [new Product(1, 'Воппер', 179, 5, 'Вкуснейший бургер'),
      new Product(2, 'Мясо', 200, 4, 'Отличное мясо'),
      new Product(3, 'Хлеб', 30, 5, 'Преподаёт как надо')];
  data = new BehaviorSubject<Array<Product>>(this.backendData);

  constructor() {
  }

  ngOnInit(): void {
    this.searchValue.pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(data => {
        if(data!=null){
          this.data.next(this.backendData.filter(x => x.name.includes(data)));
        }
      });

  }

}
