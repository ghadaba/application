import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instruction } from './instruction';

@Injectable({
  providedIn: 'root'
})


export class InstructionService {
  private httpOptions = {
    headers: new HttpHeaders({ 
    })
  };
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getInstruction(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInstruction(instruction: Instruction): Observable<Instruction> {
   
    return this.http.post<Instruction> (`${this.baseUrl}`+'/instruction', instruction);
  }

  updateInstruction(id: number, instruction:Instruction): Observable<Instruction> {
    return this.http.put<Instruction>(`${this.baseUrl}/${id}`+'/instruction', instruction);
  }

  deleteInstruction(id: number): Observable<Instruction> {
    return this.http.delete<Instruction>(`${this.baseUrl}/${id}`+'/instruction');
  }

  getInstructionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/instructions');
  }
}
