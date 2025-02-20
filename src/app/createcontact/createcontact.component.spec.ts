import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactComponent } from './createcontact.component';

describe('CreateContactComponent', () => {
  let component: CreateContactComponent;
  let fixture: ComponentFixture<CreateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
