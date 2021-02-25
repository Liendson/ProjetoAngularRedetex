import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomAlertsService } from 'src/app/shared/services/custom-alerts.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public clientes = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private mensagem: CustomAlertsService
  ) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: `https://cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json`
      }
    };

    this.activatedRoute.params.subscribe(() => {
      const urlRequest = `http://localhost:8080/clientes`;

      this.http.get(urlRequest).subscribe((clientes: any) => {
        this.clientes = clientes;
        this.dtTrigger.next();
      });
    });
  }

  editarCliente(id: number) {
    this.router.navigate([`alterar/${id}`], { relativeTo: this.activatedRoute });
  }

  removerCliente(id: number) {

    const urlRequest = `http://localhost:8080/clientes/${id}/remover`;

    for (let i = this.clientes.length - 1; i >= 0; i--) {
      if (this.clientes[i].id === id) {
        this.http.delete(urlRequest).subscribe(
          (success) => {
            this.clientes.splice(i, 1);
            this.mensagem.exibirSucesso('Sucesso!', 'Cliente Removido com sucesso!');
          },
          (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!'); });
      }
    }
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }
}
