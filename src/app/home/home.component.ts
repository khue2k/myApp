import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public name = 'Khuê Dương'
  public age = 17
  public vehicles = ['toyota', 'honda', 'yamaha']
  public options = ['option 1', 'option 2', 'option 3'];

  onNameChange() {
    console.log(this.name)
  }

  addAge() {
    this.age++;
    this.vehicles.push(this.name+" : "+this.age)
    console.log(this.age)
  }

}
