import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { Pizza } from '../models/pizza.model';

const examplePizza: Pizza[] = [
  {
    id: '1',
    name: 'Smoked Salmon',
    description: 'Donec nec maximus turpis. Donec ac augue lacus. Sed eleifend tempus aliquam. Nunc dapibus metus ac semper aliquam. Aenean pharetra laoreet sapien. Sed eu tortor et elit lacinia commodo.',
    thumbnail: 'https://thepizzacompany.vn/363-home_default/pizza-mspesto-sanh-diu.jpg',
    images: [
      ''
    ],
    price: 50000,
    currency: '$',
  } as Pizza,
  {
    id: '2',
    name: 'Meat Deluxe',
    description: 'Donec nec maximus turpis. Donec ac augue lacus. Sed eleifend tempus aliquam. Nunc dapibus metus ac semper aliquam. Aenean pharetra laoreet sapien. Sed eu tortor et elit lacinia commodo. Aenean faucibus, enim et hendrerit viverra, velit nulla mollis nisl, non porttitor magna enim sed ex.',
    thumbnail: 'https://thepizzacompany.vn/132-home_default/pizza-hawaii.jpg',
    images: [
      ''
    ],
    price: 150000,
    currency: '$',
  } as Pizza,
  {
    id: '2',
    name: 'Meat Deluxe',
    description: 'Donec nec maximus turpis. Donec ac augue lacus. Sed eleifend tempus aliquam. Nunc dapibus metus ac semper aliquam. Aenean pharetra laoreet sapien. Sed eu tortor et elit lacinia commodo. Aenean faucibus, enim et hendrerit viverra, velit nulla mollis nisl, non porttitor magna enim sed ex.',
    thumbnail: 'https://thepizzacompany.vn/132-home_default/pizza-hawaii.jpg',
    images: [
      ''
    ],
    price: 150000,
    currency: '$',
  } as Pizza
];


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private firestore: AngularFirestore) { }

  getList(): Observable<Pizza[]> {
    return this.firestore.collection<Pizza>('pizzas').valueChanges({
      idField: 'id'
    });
    // return of(examplePizza).pipe(delay(1000));
  }

  get(id: string): Observable<Pizza> {
    return this.firestore.collection('pizzas').doc<Pizza>(id).valueChanges().pipe(
      map(pizza => {
        return {
          ...pizza,
          id
        } as Pizza;
      })
    );
    // return from(examplePizza).pipe(
    //   filter(pizza => pizza.id === id),
    //   delay(1000)
    // );
  }
}
