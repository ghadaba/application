import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { CreateInstructionComponent } from './create-instruction/create-instruction.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { UpdateInstructionComponent } from './update-instruction/update-instruction.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAssetComponent,
    AssetDetailsComponent,
    AssetListComponent,
    InstructionDetailsComponent,
    InstructionListComponent,
    CreateInstructionComponent,
    UpdateAssetComponent,
    UpdateInstructionComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
