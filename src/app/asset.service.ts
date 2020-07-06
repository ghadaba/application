import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})


export class AssetService {
  private httpOptions = {
    headers: new HttpHeaders({ 
    })
  };
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getAsset(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAsset(asset: Asset): Observable<Asset> {
   
    return this.http.post<Asset> (`${this.baseUrl}`+'/asset', asset);
  }

  updateAsset(id: number, asset:Asset): Observable<Asset> {
    return this.http.put<Asset>(`${this.baseUrl}/${id}`+'/asset', asset);
  }

  deleteAsset(id: number): Observable<Asset> {
    return this.http.delete<Asset>(`${this.baseUrl}/${id}`+'/asset');
  }

  getAssetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/assets');
  }
}
