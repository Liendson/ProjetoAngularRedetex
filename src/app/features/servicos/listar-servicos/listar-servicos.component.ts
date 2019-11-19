import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servicos.component.html',
  styleUrls: ['./listar-servicos.component.scss']
})
export class ListarServicosComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public servicos = [];

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
      const urlRequest = `http://localhost:8080/servicos`;

      this.http.get(urlRequest).subscribe((servico: any) => {
        this.servicos = servico;
        this.dtTrigger.next();
      });
    });
  }

  editarServico(id: number) {
    this.router.navigate([`alterar/${id}`], { relativeTo: this.activatedRoute });
  }
  
  removerServico(id: number) {

    const urlRequest = `http://localhost:8080/servicos/${id}/remover`;

    for (let i = this.servicos.length - 1; i >= 0; i--) {
      if (this.servicos[i].id === id) {
        this.http.delete(urlRequest).subscribe(
          (success) => {
            this.servicos.splice(i, 1);
            this.mensagem.exibirSucesso('Sucesso!', 'Cliente Removido com sucesso!')
          },
          (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!') });
      }
    }
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }
}
