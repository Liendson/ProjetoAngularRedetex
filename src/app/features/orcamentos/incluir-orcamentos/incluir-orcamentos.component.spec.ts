import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirOrcamentosComponent } from './incluir-orcamentos.component';

describe('IncluirOrcamentosComponent', () => {
  let component: IncluirOrcamentosComponent;
  let fixture: ComponentFixture<IncluirOrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirOrcamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
