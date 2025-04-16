import { DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {
    private dataSubject = new BehaviorSubject<Product[]>([]);
    private filterSubject = new BehaviorSubject<string>('');

    constructor(initialData: Product[] = []) {
        super();
        this.dataSubject.next(initialData);
    }

    connect(): Observable<Product[]> {
        return combineLatest([
            this.dataSubject.asObservable(),
            this.filterSubject.asObservable()
        ]).pipe(
            map(([products, filter]) => {
                if (!filter) return products;
                return products.filter(product => 
                    product.title.toLowerCase().includes(filter.toLowerCase()) ||
                    product.id.toString().includes(filter) ||
                    product.price.toString().includes(filter)
                );
            })
        );
    }

    disconnect() {
        this.dataSubject.complete();
        this.filterSubject.complete();
    }

    updateData(data: Product[]) {
        this.dataSubject.next(data);
    }

    update(id: Product['id'], changes: Partial<Product>) {
        const products = this.dataSubject.getValue();
        const productIndex = products.findIndex(item => item.id === id);
        
        if (productIndex !== -1) {
            const updatedProducts = [...products];
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                ...changes
            };
            this.dataSubject.next(updatedProducts);
        }
    }

    filter(value: string) {
        this.filterSubject.next(value);
    }
}