import { Component } from '@angular/core';
import { TarefasService } from '../../services/tarefas.service';
import { Tarefa } from '../../interfaces/tarefa';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
  export class TarefasComponent {
    data = new Date('2021-04-23T10:00:00.000');
    tarefas:Tarefa[] = [];
    tarefaForm: FormGroup = new FormGroup({})

    constructor(private tarefaService:TarefasService, private formbuilder: FormBuilder) {
    this.tarefaForm = this.formbuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } 

  inserirTarefa(){
    if(this.tarefaForm.valid){
      const tarefaNova:Tarefa = {
        nome: this.tarefaForm.value.nome,
        descricao: this.tarefaForm.value.descricao,
        id: this.generateRandomString(6)
      }
      this.tarefaForm.reset()
      this.tarefaService.adicionarTarefa(tarefaNova)
      alert('Tarefa cadastrada com sucesso!')
    }else{
      alert('não foi possivel cadastrar')
    }
  }

  listar():void{
    this.tarefas = this.tarefaService.listarTarefa();
  }

  ngOnInit():void{
    this.listar();
  }

  removerTarefa(id:string):void{
    this.tarefaService.removerTarefa(id)
    alert('Tarefa removida com sucesso!')
   }

}