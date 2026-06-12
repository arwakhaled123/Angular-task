import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, DUMMY_PRODUCTS } from '../../models/products.data';
import { ProductCardComponent } from '../product-card/product-card';
import { ThemeDirective } from '../../directives/theme.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ThemeDirective],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  selectedCategory: string = 'all';
  selectedSort: string = 'none';


  totalPrice: number = 0;


  currentTheme: 'light' | 'dark' = 'light';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    this.products = JSON.parse(JSON.stringify(DUMMY_PRODUCTS));
    this.filteredProducts = [...this.products];
    this.calculateTotal();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.cdr.detectChanges();
  }

  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.applyFilteringAndSorting();
  }

  onSortChange(sortOption: string) {
    this.selectedSort = sortOption;
    this.applyFilteringAndSorting();
  }

  applyFilteringAndSorting() {
    let result = [...this.products];

    if (this.selectedCategory !== 'all') {
      result = result.filter(p => p.category === this.selectedCategory);
    }


    if (this.selectedSort === 'low-price') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'high-stock') {
      result.sort((a, b) => b.stock - a.stock);
    }

    this.filteredProducts = result;
    this.cdr.detectChanges();
  }

  calculateTotal() {
    this.totalPrice = this.products.reduce((acc, product) => {
      return acc + (product.price * product.quantitySelected);
    }, 0);
    this.cdr.detectChanges();
  }

  handlePurchase(product: Product) {
    alert(`Successfully purchased ${product.quantitySelected} units of ${product.title}!`);


    const target = this.products.find(p => p.id === product.id);
    if (target) {
      target.stock -= target.quantitySelected;
      target.quantitySelected = 0;
    }

    this.calculateTotal();
    this.applyFilteringAndSorting();
  }
}
