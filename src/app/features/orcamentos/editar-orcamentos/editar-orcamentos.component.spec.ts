import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrcamentosComponent } from './editar-orcamentos.component';

describe('EditarOrcamentosComponent', () => {
  let component: EditarOrcamentosComponent;
  let fixture: ComponentFixture<EditarOrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOrcamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
