import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CustomAlertsService } from 'src/app/shared/shared-services/custom-alerts.service';

@Component({
  selector: 'app-detalhar-orcamentos',
  templateUrl: './detalhar-orcamentos.component.html',
  styleUrls: ['./detalhar-orcamentos.component.scss']
})
export class DetalharOrcamentoComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public orcamentos = [];

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
      const urlRequest = `http://localhost:8080/orcamentos`;

      this.http.get(urlRequest).subscribe((orcamento: any[]) => {
        this.orcamentos = orcamento;
        this.dtTrigger.next();
      });
    });
  }
  
  editarOrcamento(id: number) {
    this.router.navigate([`alterar/${id}`], { relativeTo: this.activatedRoute });
  }

  removerOrcamento(id: number) {

    const urlRequest = `http://localhost:8080/orcamentos/${id}/remover`;

    for (let i = this.orcamentos.length - 1; i >= 0; i--) {
      if (this.orcamentos[i].id === id) {
        this.http.delete(urlRequest).subscribe(
          (success) => {
            this.orcamentos.splice(i, 1);
            this.mensagem.exibirSucesso('Sucesso!', 'Orçamento Removido com sucesso!')
          },
          (error) => { this.mensagem.exibirErro('Erro!', 'Contate os administradores do sistema!') });
      }
    }
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }
}
