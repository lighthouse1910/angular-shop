import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../main-content/item.model';
import { ShowItemComponent } from '../show-item/show-item.component';
import { TestService } from '../app.service';
import { IClothes } from '../app.model';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.scss']
})
export class FormaddComponent implements OnInit {
  items: IClothes[];
  listImg;
  category;
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private testSv: TestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      Name: '',
      Image: '',
      Price: '',
      Category: ''
    });
    this.listImg = [
      { name: 'ao nam 1', imgUrl: './assets/images/ao-nam-1.jpg' },
      { name: 'ao nam 2', imgUrl: './assets/images/ao-nam-2.jpg' },
      { name: 'ao nam 3', imgUrl: './assets/images/ao-nam-3.jpg' },
      { name: 'ao nam 4', imgUrl: './assets/images/ao-nam-4.jpg' },
      { name: 'ao nu 1', imgUrl: './assets/images/ao-nu-1.jpg' },
      { name: 'ao nu 2', imgUrl: './assets/images/ao-nu-2.jpg' },
      { name: 'ao nu 3', imgUrl: './assets/images/ao-nu-3.jpg' },
      { name: 'ao nu 4', imgUrl: './assets/images/ao-nu-4.jpg' }
    ];
    this.category = ['male', 'female'];
  }
  onSubmit() {
    const value = this.addForm.value;
    if (this.addForm.valid) {
      this.testSv
        .addNewProduct(this.addForm.value)
        .subscribe(res => this.router.navigateByUrl('/products'));
    }
    console.log(value, this.items);
  }
}
