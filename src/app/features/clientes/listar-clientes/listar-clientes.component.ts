import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomAlertsService } from 'src/app/shared/custom-alerts/custom-alerts.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
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
      const urlRequest = `https://jsonplaceholder.typicode.com/posts/`;

      this.http.get(urlRequest).subscribe((orcamento: any) => {
        this.orcamentos = orcamento;
        this.dtTrigger.next();
      });
    });
  }

  editarOrcamento(id: number) {
    this.router.navigate([`alterar/${id}`], { relativeTo: this.activatedRoute });
  }

  naoImplementada() {
    this.mensagem.exibirAvisoNaoImplementada();
  }
}
