import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Client';
import { ClientService } from 'src/app/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  IdClient: number;
  client : Client ; 

  constructor(private route: ActivatedRoute,private router: Router,
    private ClientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.IdClient = this.route.snapshot.params['Id'];
    
    this.ClientService.getClient(this.IdClient)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['clients']);
  }
}