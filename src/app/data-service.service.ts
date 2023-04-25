import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import containerData from '../assets/containerData.json'

@Injectable({
  providedIn: 'root'
})
export class EDataServiceService {

  constructor() { }

  public originContainerObj = new BehaviorSubject<any>(containerData)
  public shareOriginContainerObj = this.originContainerObj.asObservable()

  public selectedId = new BehaviorSubject<any>(2)
  public shareSelectedId = this.selectedId.asObservable()

  public currentContainerDetails = new BehaviorSubject<any>(containerData)
  public shareCurrentContainerDetails = this.currentContainerDetails.asObservable()

  public searchInput = new BehaviorSubject<any>("")
  public shareSearchInput = this.searchInput.asObservable()

  public containerObj = containerData

  updateSelectedId(id: any) {
    this.selectedId.next(id)
  }

  updateCurrentContainerDetails(data: any) {
    this.currentContainerDetails.next(data)
  }

  updateSearchInput(searchInput: any) {
    this.searchInput.next(searchInput)
  }
}
