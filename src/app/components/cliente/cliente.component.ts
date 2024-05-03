import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes:Cliente[] = [];
  clienteForm: FormGroup = new FormGroup({})

  constructor(private clienteService:ClienteService, private formbuilder: FormBuilder) {
  this.clienteForm = this.formbuilder.group({
    nome: ['', Validators.required],
    telefone: ['', Validators.required]
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

 inserir(){
  if(this.clienteForm.valid){
    const clienteNovo:Cliente = {
      nome: this.clienteForm.value.nome,
      telefone: this.clienteForm.value.telefone,
      id: this.generateRandomString(6)
    }
    this.clienteForm.reset()
    this.clientes.push(clienteNovo)
    this.clienteService.adicionar(clienteNovo).subscribe()
    alert('Cliente cadastrado com sucesso!')

  }
 }

 listar():void{
    this.clienteService.listar().subscribe((listClient) => (this.clientes = listClient))
 }

 ngOnInit():void{
   this.listar();
 }

 remover(id:string):void{
  this.clientes = this.clientes.filter((c) => c.id !== id)
  this.clienteService.remover(id).subscribe()
  alert('removido com sucesso!')
 }

}
