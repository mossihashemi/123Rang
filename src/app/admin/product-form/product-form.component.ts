import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { SubCategory } from '../../models/subCategory';
import { Category } from '../../models/category';
import { ColorType } from '../../models/colorType';
import { Wash } from '../../models/whash';
import { Size } from '../../models/size';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  selectedCategory: Category = new Category(1, 'رنگ');
  categories: Category[];
  subCategories: SubCategory[];
  colorTypes: ColorType[];
  washable: Wash[];
  size: Size[];

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.onSelect(this.selectedCategory.id);
  }


  onSelect(categoryid) {
    this.subCategories = this.categoryService.getSubCategories().filter((item) => item.categoryid == categoryid);
    this.colorTypes = this.categoryService.getColorType().filter((item) => item.categoryid == categoryid);
    this.washable = this.categoryService.getWash().filter((item) => item.categoryid == categoryid);
    this.size = this.categoryService.getSize().filter((item) => item.categoryid == categoryid);

  }
}
