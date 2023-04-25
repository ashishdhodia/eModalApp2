import { Component } from '@angular/core';
import { EDataServiceService } from '../data-service.service'

@Component({
  selector: 'app-containerlist',
  templateUrl: './containerlist.component.html',
  styleUrls: ['./containerlist.component.css']
})
export class ContainerlistComponent {
  constructor(public dataService: EDataServiceService) { }
  searchInput!: string
  originContainerObj: any
  selectedId: any

  changeDetails(id: any) {
    this.selectedId = id
    this.dataService.updateSelectedId(id)
    this.dataService.updateCurrentContainerDetails(this.originContainerObj.filter((container: any) => container.id === id))
  }

  ngOnInit(): void {
    this.dataService.shareSearchInput.subscribe(x => this.searchInput = x)
    this.dataService.shareOriginContainerObj.subscribe(x => this.originContainerObj = x)
  }
}
