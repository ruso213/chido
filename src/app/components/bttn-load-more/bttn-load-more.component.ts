import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bttn-load-more',
  templateUrl: './bttn-load-more.component.html',
  styleUrls: ['./bttn-load-more.component.scss']
})
export class BttnLoadMoreComponent {
  @Output() loadMore = new EventEmitter()
  loadMoreBtn(){
    this.loadMore.emit()
  }
}
