import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.css']
})
export class PrincipalButtonComponent implements OnInit {
  @Input() buttonLabel?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
