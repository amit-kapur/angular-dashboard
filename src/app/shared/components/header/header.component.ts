import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarOutput: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleSideBar() {
    this.toggleSideBarOutput.emit();

    //
    // Make charts responsive
    //
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
