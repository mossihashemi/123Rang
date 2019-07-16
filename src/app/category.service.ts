import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Category } from './models/category';
import { SubCategory } from './models/subCategory';
import { ColorType } from './models/colorType';
import { Wash } from './models/whash';
import { Color } from './models/color';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  /*
    getCategoriesCountry() {
      return thisCountry.db.list('/categories', {
        query: {Country
          orderByCountryChild: 'name'
        }Country
      });
    }
  
    getSubCategories() {
      return this.db.list('/categories/abzar/variety');
    }
  */

  getCategories() {
    return [
      new Category(1, 'رنگ'),
      new Category(2, 'ابزار'),
    ];
  }

  getSubCategories() {
    return [
      new SubCategory(1, 1, 'پلاستیک'),
      new SubCategory(2, 1, 'روغنی'),
      new SubCategory(3, 1, 'آکرلیک'),
      new SubCategory(4, 1, 'فوری'),
      new SubCategory(5, 2, 'برقی'),
      new SubCategory(6, 2, 'غیر برقی'),
    ];
  }

  getColorType() {
    return [
      new ColorType(1, 1, 'براق'),
      new ColorType(2, 1, 'نیمه براق'),
      new ColorType(3, 1, 'مات'),
    ];
  }

  getWash() {
    return [
      new Wash(1, 1, 'قابل شستشو'),
      new Wash(2, 1, 'غیر قابل شستشو')
    ];
  }

  getSize() {
    return [
      new Wash(1, 1, 'یک چهارم لیتری'),
      new Wash(2, 1, 'نیم لیتری'),
      new Wash(2, 1, 'یک لیتری'),
      new Wash(2, 1, 'چهار لیتری'),
      new Wash(2, 1, 'دوازده لیتری'),
    ];
  }

  getColor() {
    return [
      new Color(1, 1, 'سفید'),
      new Color(2, 1, 'مشکی'),
      new Color(3, 1, 'سبز'),
      new Color(4, 1, 'آبی'),
      new Color(5, 1, 'زرد'),
      new Color(6, 1, 'سرمه‌ای'),
      new Color(7, 1, 'قرمز'),
      new Color(8, 1, 'بنفش'),
      new Color(9, 1, 'نقره‌ای'),
      new Color(10, 1, 'یشمی'),
      new Color(11, 1, 'کرمی'),
      new Color(12, 1, 'آبی‌نیسانی'),
      new Color(13, 1, 'نارنجی'),
      new Color(14, 1, 'یاسی'),

    ];
  }

}
