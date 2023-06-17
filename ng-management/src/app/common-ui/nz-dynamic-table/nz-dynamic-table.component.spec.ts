import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzDynamicTableComponent } from './nz-dynamic-table.component';

describe('NzDynamicTableComponent', () => {
  let component: NzDynamicTableComponent;
  let fixture: ComponentFixture<NzDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzDynamicTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
