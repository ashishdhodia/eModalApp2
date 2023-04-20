import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ModaldialogComponent } from '../modaldialog/modaldialog.component'

@Component({
  selector: 'app-wo-responsive-app',
  templateUrl: './wo-responsive-app.component.html',
  styleUrls: ['./wo-responsive-app.component.css']
})
export class WoResponsiveAppComponent {
  constructor(public dialog: MatDialog) { }
  darkMode = false

  openDialog() {
    this.dialog.open(ModaldialogComponent)
  }
  changeTheme() {
    this.darkMode = !this.darkMode
  }
}
