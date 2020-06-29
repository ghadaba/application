import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {

  id: number;
  asset: Asset;

  constructor(private route: ActivatedRoute,private router: Router,
    private assetService: AssetService) { }

  ngOnInit() {
    this.asset = new Asset();

    this.id = this.route.snapshot.params['id'];
    
    this.assetService.getAsset(this.id)
      .subscribe(data => {
        console.log(data)
        this.asset = data;
      }, error => console.log(error));
  }

  updateAsset() {
    this.assetService.updateAsset(this.id, this.asset)
      .subscribe(data => console.log(data), error => console.log(error));
    this.asset = new Asset();
    this.gotoList();
  }

  onSubmit() {
    this.updateAsset();    
  }

  gotoList() {
    this.router.navigate(['/assets']);
  }
}