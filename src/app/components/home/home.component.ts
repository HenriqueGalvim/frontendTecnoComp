import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAppService } from 'src/app/service-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private appService:ServiceAppService,private router:Router){}

  navigation(){
    this.router.navigate(['/teorias-da-aprendizagem']);
  }

}
