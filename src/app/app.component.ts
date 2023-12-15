import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  public Batches : any = [];

  constructor(private service : MarvellousService)
  {

  }

  InsertData()
  {

  }
  
  
  DisplayData()
  {
    this.service.getBatches().subscribe(data =>
      {
        this.Batches = data ;
      })
  }

  UpdateData()
  {

  }

  DeleteData()
  {

  }
}
