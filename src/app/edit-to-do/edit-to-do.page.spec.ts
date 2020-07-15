import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditToDoPage } from './edit-to-do.page';

describe('EditToDoPage', () => {
  let component: EditToDoPage;
  let fixture: ComponentFixture<EditToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
