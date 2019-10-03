import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirClientesComponent } from './incluir-clientes.component';

describe('IncluirClientesComponent', () => {
  let component: IncluirClientesComponent;
  let fixture: ComponentFixture<IncluirClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
