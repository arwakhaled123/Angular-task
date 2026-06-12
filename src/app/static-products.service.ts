import { Injectable } from '@angular/core';
import { Product, DUMMY_PRODUCTS } from '../models/products.data';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StaticProductsService {
  private items: Product[] = JSON.parse(JSON.stringify(DUMMY_PRODUCTS));

  list(): Observable<Product[]> { return of(this.items.slice()); }

  get(id: number): Observable<Product | undefined> { return of(this.items.find(x=>x.id===id)); }

  post(p: Omit<Product,'id'>): Observable<Product> {
    const newP: Product = { ...p, id: Date.now() } as Product;
    this.items.push(newP);
    return of(newP);
  }

  put(id: number, p: Partial<Product>): Observable<Product | undefined> {
    const idx = this.items.findIndex(x=>x.id===id);
    if (idx<0) return of(undefined);
    this.items[idx] = { ...this.items[idx], ...p } as Product;
    return of(this.items[idx]);
  }

  delete(id: number): Observable<boolean> {
    const before = this.items.length;
    this.items = this.items.filter(x=>x.id!==id);
    return of(this.items.length < before);
  }
}
