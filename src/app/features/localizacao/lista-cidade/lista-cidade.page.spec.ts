import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCidadePage } from './lista-cidade.page';

describe('ListaCidadePage', () => {
  let component: ListaCidadePage;
  let fixture: ComponentFixture<ListaCidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
