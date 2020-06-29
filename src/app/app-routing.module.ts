import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';
import { CreateInstructionComponent } from './create-instruction/create-instruction.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { UpdateInstructionComponent } from './update-instruction/update-instruction.component';

import { ClientDetailsComponent } from './client-details/client-details.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
const routes: Routes = [
  { path: '', redirectTo: 'asset', pathMatch: 'full' },
  { path: 'assets', component: AssetListComponent },
  { path: 'add', component: CreateAssetComponent },
  { path: 'update/:id', component: UpdateAssetComponent },
  { path: 'details/:id', component: AssetDetailsComponent },

  { path: '', redirectTo: 'instruction', pathMatch: 'full' },
  { path: 'instructions', component: InstructionListComponent },
  { path: 'add', component: CreateInstructionComponent },
  { path: 'update/:id', component: UpdateInstructionComponent },
  { path: 'details/:id', component: InstructionDetailsComponent },

  { path: '', redirectTo: 'asset', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add', component: CreateClientComponent },
  { path: 'update/:id', component: UpdateClientComponent },
  { path: 'details/:id', component: ClientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
