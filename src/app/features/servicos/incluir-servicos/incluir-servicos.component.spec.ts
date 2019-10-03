import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirServicosComponent } from './incluir-servicos.component';

describe('IncluirServicosComponent', () => {
  let component: IncluirServicosComponent;
  let fixture: ComponentFixture<IncluirServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
