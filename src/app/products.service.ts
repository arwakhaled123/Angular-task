import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, of } from 'rxjs';
import { Product } from '../models/products.data';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private url = '/assets/products.json';
  private items$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  loadAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      map(items => {
        this.items$.next(items);
        return items;
      })
    );
  }

  all(): Observable<Product[]> {
    return this.items$.asObservable();
  }

  add(p: Product) {
    const current = this.items$.value.slice();
    current.push(p);
    this.items$.next(current);
    return of(p) as unknown as Observable<Product>;
  }

  update(p: Product) {
    const current = this.items$.value.slice();
    const idx = current.findIndex(x => x.id === p.id);
    if (idx >= 0) current[idx] = p;
    this.items$.next(current);
    return of(p) as unknown as Observable<Product>;
  }

  delete(id: number) {
    const current = this.items$.value.filter(x => x.id !== id);
    this.items$.next(current);
    return of(null) as unknown as Observable<null>;
  }
}
