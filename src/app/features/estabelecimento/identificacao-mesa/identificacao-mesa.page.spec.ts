import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentificacaoMesaPage } from './identificacao-mesa.page';

describe('IdentificacaoMesaPage', () => {
  let component: IdentificacaoMesaPage;
  let fixture: ComponentFixture<IdentificacaoMesaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacaoMesaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdentificacaoMesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
