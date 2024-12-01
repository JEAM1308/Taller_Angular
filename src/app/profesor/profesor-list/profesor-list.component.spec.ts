import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { DebugElement } from '@angular/core';

import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { ProfesorListComponent } from './profesor-list.component';

import { ProfesorService } from '../profesor.service';

import { ProfesorDetail } from '../profesordetail';

import { ProfesorDetailComponent } from '../profesor-detail/profesor-detail.component';



describe('ProfesorListComponent', () => {

  let component: ProfesorListComponent;

  let fixture: ComponentFixture<ProfesorListComponent>;

  let debug: DebugElement;



  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({

      imports: [

        HttpClientModule,

        CommonModule,

        ProfesorListComponent,

        ProfesorDetailComponent

      ],

      providers: [ ProfesorService ]

    })

    .compileComponents();

  }));



  beforeEach(() => {

    fixture = TestBed.createComponent(ProfesorListComponent);

    component = fixture.componentInstance;

    component.profesores = [];



    for(let i = 0; i < 12; i++) {

      const profesor = new ProfesorDetail(

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

      component.profesores.push(profesor);

    }

    

    fixture.detectChanges();

    debug = fixture.debugElement;

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });



  it('should have 12 profesores', () => {

    expect(component.profesores.length).toBe(12);

  });



  it('should select profesor on click', () => {

    const profesor = component.profesores[0];

    component.onSelected(profesor);

    expect(component.selected).toBeTruthy();

    expect(component.selectedProfesor).toBe(profesor);

  });

}); 
