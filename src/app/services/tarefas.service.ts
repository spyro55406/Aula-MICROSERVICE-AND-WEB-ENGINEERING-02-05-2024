import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

    //Esta lista virá da API
    tarefas:Tarefa[] = [
      {id: "fdaklfads", nome: "Cozinha", descricao:"limpar a cozinha"},
      {id: "askhgvcai", nome : "Compras", descricao:"fazer compras"}
    ];
  
    listarTarefa():Tarefa[]{
      return this.tarefas;
    }
  
    removerTarefa(id:string){
      const tarefa = this.tarefas.find(c => c.id == id);
  
      if(tarefa){
         const index = this.tarefas.indexOf(tarefa);
         this.tarefas.splice(index,1);
      }
    }
  
    adicionarTarefa(tarefa:Tarefa){
      this.tarefas.push(tarefa);
    }

}
