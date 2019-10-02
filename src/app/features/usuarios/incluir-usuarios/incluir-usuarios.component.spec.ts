import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirUsuariosComponent } from './incluir-usuarios.component';

describe('IncluirUsuariosComponent', () => {
  let component: IncluirUsuariosComponent;
  let fixture: ComponentFixture<IncluirUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
