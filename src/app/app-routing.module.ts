
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';
import { CreateInstructionComponent } from './create-instruction/create-instruction.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { UpdateInstructionComponent } from './update-instruction/update-instruction.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
const routes: Routes = [
  
   { path: '', redirectTo: 'asset', pathMatch: 'full' },
   { path: 'assets', component: AssetListComponent },
   { path: 'assets/add', component: CreateAssetComponent },
   { path: 'update/:id', component: UpdateAssetComponent },

  { path: '', redirectTo: 'instruction', pathMatch: 'full' },
  { path: 'instructions', component: InstructionListComponent },
  { path: 'instructions/add', component: CreateInstructionComponent },
  { path: 'update/:id', component: UpdateInstructionComponent },

  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
