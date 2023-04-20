import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModaldialogComponent } from '../modaldialog/modaldialog.component'

@Component({
  selector: 'app-responsive-app',
  templateUrl: './responsive-app.component.html',
  styleUrls: ['./responsive-app.component.css']
})
export class ResponsiveAppComponent {
  constructor(public dialog: MatDialog) { }
  darkMode = false

  openDialog() {
    this.dialog.open(ModaldialogComponent)
  }
  changeTheme() {
    this.darkMode = !this.darkMode
  }
}
