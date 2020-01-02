import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateNotePage } from './update-note.page';

describe('UpdateNotePage', () => {
  let component: UpdateNotePage;
  let fixture: ComponentFixture<UpdateNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
