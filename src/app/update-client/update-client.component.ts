import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Client } from 'src/app/Client';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  id: any;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private ClientService: ClientService) { }

  ngOnInit() {

  this.client = new Client();
  this.id = this.route.snapshot.params['id'];

  this.ClientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));

  }
  updateClient() {
    this.ClientService.updateClient(this.id, this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }
  onSubmit() {
    this.updateClient();    
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}