import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/instruction';
import { InstructionService } from 'src/app/instruction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-instruction',
  templateUrl: './create-instruction.component.html',
  styleUrls: ['./create-instruction.component.css']
})
export class CreateInstructionComponent implements OnInit {
instruction : Instruction = new Instruction() ; 
submitted = false;
  constructor(private InstructionService: InstructionService,
    private router: Router) { }

  ngOnInit() {
  }

  newInstruction(): void {
    this.submitted = false;
    this.instruction = new Instruction();
  }
  save() {
    this.InstructionService.createInstruction(this.instruction)
      .subscribe(data => console.log(data), error => console.log(error));
    this.instruction = new Instruction();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/instructions']);
  }

}

