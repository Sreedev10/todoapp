import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalltodo',
  templateUrl: './viewalltodo.component.html',
  styleUrls: ['./viewalltodo.component.css']
})
export class ViewalltodoComponent implements OnInit {

  constructor(private api:ApiService) { this.dataFromApi()}

  dataFromApi=()=>{
  this.api.fetchtodo().subscribe(
    (response)=>{
      this.todo=response
    }
  )
  }

  todo:any=[
   
  ]

  ngOnInit(): void {
  }

}
