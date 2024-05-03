import { Component } from '@angular/core';
import { IbgeService } from '../../services/ibge.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ibge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ibge.component.html',
  styleUrl: './ibge.component.css'
})
export class IbgeComponent {
  estados: any[] = [];

  constructor(private ibgeService: IbgeService) { }

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados(): void {
    this.ibgeService.getEstados().subscribe(estados => this.estados = estados);
  }
}
