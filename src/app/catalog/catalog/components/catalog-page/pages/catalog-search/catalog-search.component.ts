import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  valueChange(event: string) {
    this.change.emit(event);
  }

}
