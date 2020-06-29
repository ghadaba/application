
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Client';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
client : Client = new Client() ; 
submitted = false;
  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
  save() {
    this.ClientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/clients']);
  }

}

