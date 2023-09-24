import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
//for local storage
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
//for fetching that local stored item
  public getData(key: string) {
    return localStorage.getItem(key)
  }

  //for remoning local storage data
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
//for clearing all data
  public clearData() {
    localStorage.clear();
  }

  

}
