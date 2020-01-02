import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewNotePage } from './view-note.page';

describe('ViewNotePage', () => {
  let component: ViewNotePage;
  let fixture: ComponentFixture<ViewNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
