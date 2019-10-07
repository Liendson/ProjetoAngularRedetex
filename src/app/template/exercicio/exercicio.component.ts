import { CustomAlertsService } from './../../shared/custom-alerts/custom-alerts.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent implements OnInit {

  public tarefas: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private customAlerts: CustomAlertsService
  ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: `https://cdn.datatables.net/plug-ins/1.10.20/i18n/Portuguese-Brasil.json`
      }
    };
  }

  validarForm(formTarefas) {
    if (!formTarefas.titulo.value) {
      this.customAlerts.exibirErro('Erro!', 'Adicione o Título da Tarefa!');
      return false;
    }
    if (!formTarefas.conteudo.value) {
      this.customAlerts.exibirErro('Erro!', 'Adicione o Conteúdo da Tarefa!');
      return false;
    }
    if (!formTarefas.dataEntrega.value) {
      this.customAlerts.exibirErro('Erro!', 'Adicione a Data de Entrega da Tarefa!');
      return false;
    }
    return true;
  }

  addTarefa(formTarefas) {
    if (!this.validarForm(formTarefas)) {
      return false;
    }
    try {
      const novaTarefa = {
        titulo: formTarefas.titulo.value,
        conteudo: formTarefas.conteudo.value,
        prioridade: formTarefas.prioridade.value,
        dataEntrega: formTarefas.dataEntrega.value,
        status: false
      };
      this.tarefas.push(novaTarefa);
      this.customAlerts.exibirSucesso('Sucesso!', 'Tarefa Incluída com Sucesso!');
      this.limparForm(formTarefas);
    } catch {
      this.customAlerts.exibirErro('Erro!', 'Erro ao Incluir Tarefa!');
    }
    return true;
  }

  removeTarefa(tarefa) {
    for (let i = this.tarefas.length - 1; i >= 0; i--) {
      if (this.tarefas[i].titulo === tarefa) {
        this.tarefas.splice(i, 1);
        this.customAlerts.exibirSucesso('Sucesso!', 'Tarefa Removida com Sucesso!');
        return;
      }
    }
    this.customAlerts.exibirErro('Erro!', 'Algo deu errado!');
  }

  marcaTarefa(tarefa) {
    tarefa.status = !tarefa.status;
  }

  limparForm(formTarefas) {
    formTarefas.reset();
  }

}
