import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServeurComponent } from './list-serveur.component';

describe('ListServeurComponent', () => {
  let component: ListServeurComponent;
  let fixture: ComponentFixture<ListServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
