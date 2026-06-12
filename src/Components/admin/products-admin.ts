import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaticProductsService } from '../../app/static-products.service';
import { Product } from '../../models/products.data';

@Component({
  selector: 'app-products-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-admin.html',
  styleUrls: ['./products-admin.css']
})
export class ProductsAdmin implements OnInit {
  items: Product[] = [];
  editing: Record<number, boolean> = {};
  newRow: Partial<Product> = { title: '', description: '', price: 0, category: '', stock: 0, image: '', quantitySelected:0 };

  constructor(private svc: StaticProductsService) {}

  ngOnInit(){ this.load(); }

  load(){ this.svc.list().subscribe(x=> this.items = x); }

  add(){
    const p = this.newRow as Omit<Product,'id'>;
    this.svc.post(p).subscribe(()=>{ this.newRow = { title:'', description:'', price:0, category:'', stock:0, image:'', quantitySelected:0 }; this.load(); });
  }

  edit(id: number){ this.editing[id]=true; }

  save(id: number, row: Product){
    this.svc.put(id, row).subscribe(()=>{ this.editing[id]=false; this.load(); });
  }

  del(id: number){ this.svc.delete(id).subscribe(()=> this.load()); }
}
