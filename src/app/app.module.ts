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
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';

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
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent
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
