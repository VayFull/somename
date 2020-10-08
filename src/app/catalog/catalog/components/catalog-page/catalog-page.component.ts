import {Component, EventEmitter, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  url = 'someurl';
  searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  ngOnInit(): void {
  }

  change(event) {
    if (typeof event === 'string'){
      this.searchQuery.next(event);
    }
  }

}
