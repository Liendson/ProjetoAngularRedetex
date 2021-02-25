import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CustomAlertsService } from 'src/app/shared/services/custom-alerts.service';
import { OrcamentosService } from 'src/app/shared/services/orcamentos.service';
import { ServicosService } from 'src/app/shared/services/servicos.service';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';
import { ModalDetalharOrcamentoComponent } from '../orcamentos/detalhar-orcamentos/detalhar-orcamentos.component';
import { ModalDetalharServicosComponent } from '../servicos/detalhar-servicos/detalhar-servicos.component';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.scss']
})
export class CaixaDeEntradaComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  public orcamentos = [];
  public servicos = [];

  constructor(
    private orcamentosService: OrcamentosService,
    private servicosService: ServicosService,
    private mensagemService: CustomAlertsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: `https://cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json`
      }
    }
  }

  ngAfterViewInit() {
    this.buscarOrcamentosServicos()
  }

  buscarOrcamentosServicos() {
    this.orcamentosService.listar().subscribe((orcamentos: any) => {
      this.orcamentos = orcamentos
      this.servicosService.listar().subscribe((servicos: any) => {
        this.servicos = servicos
        this.rerender()
      })
    })
  }

  rerender() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      })
    } else {
      this.dtTrigger.next();
    }
  }

  detalharServico(id) {
    this.servicosService.detalhar(id).subscribe((dadosServico) => {
      const modalRef = SharedServicesService.openModal(this.modalService, ModalDetalharServicosComponent, 'xl');
      modalRef.componentInstance.dadosServico = dadosServico;
    })
  }

  cancelarServico(id) {
    this.servicosService.cancelar(id).subscribe(() => {
      this.mensagemService.exibirSucesso("Sucesso!", "Serviço cancelado com sucesso!").then(() => {
        this.buscarOrcamentosServicos()
      })
    })
  }

  concluirServico(id) {
    this.servicosService.concluir(id).subscribe(() => {
      this.mensagemService.exibirSucesso("Sucesso!", "Serviço concluído com sucesso!").then(() => {
        this.buscarOrcamentosServicos()
      })
    })
  }

  detalharOrcamento(id) {
    this.orcamentosService.detalhar(id).subscribe((dadosOrcamento) => {
      const modalRef = SharedServicesService.openModal(this.modalService, ModalDetalharOrcamentoComponent, 'xl');
      modalRef.componentInstance.dadosOrcamento = dadosOrcamento;
    })
  }

  cancelarOrcamento(id) {
    this.orcamentosService.cancelar(id).subscribe(() => {
      this.mensagemService.exibirSucesso("Sucesso!", "Orçamento cancelado com sucesso!").then(() => {
        this.buscarOrcamentosServicos()
      })
    })
  }

  concluirOrcamento(id) {
    this.orcamentosService.concluir(id).subscribe(() => {
      this.mensagemService.exibirSucesso("Sucesso!", "Orçamento concluído com sucesso!").then(() => {
        this.buscarOrcamentosServicos()
      })
    })
  }

}
