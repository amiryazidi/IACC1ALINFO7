import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaculService {

  constructor() { }

  stat(list:any[],criteria:string,value:any){
      let x=0
      for(let i in list){
        if(list[i][criteria]==value){
          x++;
        }
      }
    return x;
  }
}
