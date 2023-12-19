import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductImgaeDialogComponent } from './showproduct-imgae-dialog.component';

describe('ShowproductImgaeDialogComponent', () => {
  let component: ShowproductImgaeDialogComponent;
  let fixture: ComponentFixture<ShowproductImgaeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowproductImgaeDialogComponent]
    });
    fixture = TestBed.createComponent(ShowproductImgaeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
