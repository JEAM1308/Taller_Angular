import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { ProfesorService } from './profesor.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Profesor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfesorService]
    });
  });

  it('should ...', inject([ProfesorService], (service: ProfesorService) => {
    expect(service).toBeTruthy();
  }));
}); 