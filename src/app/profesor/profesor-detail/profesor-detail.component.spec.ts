import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';

import { ProfesorDetailComponent } from './profesor-detail.component';
import { ProfesorDetail } from '../profesordetail';

describe('ProfesorDetailComponent', () => {
  let component: ProfesorDetailComponent;
  let fixture: ComponentFixture<ProfesorDetailComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, ProfesorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorDetailComponent);
    component = fixture.componentInstance;
    
    component.profesorDetail = new ProfesorDetail(
      faker.number.int(),
      faker.person.firstName(),
      faker.person.lastName(),
      faker.image.url(),
      faker.number.float({ min: 0, max: 5}),
      faker.number.int({ min: 10000, max: 100000 }),
      faker.internet.email(),
      faker.person.jobTitle(),
      faker.lorem.paragraph(),
      faker.internet.url(),
      faker.datatype.boolean(),
      []
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a profesor', () => {
    expect(component.profesorDetail).toBeTruthy();
  });

  it('should display profesor name', () => {
    const nombre = debug.query(By.css('dd')).nativeElement.textContent;
    expect(nombre).toContain(component.profesorDetail.nombre);
    expect(nombre).toContain(component.profesorDetail.apellido);
  });
}); 