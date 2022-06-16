import React, { useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import {useParams} from 'react-router-dom';

export default function ProductDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch('../products.json')
        .then( res => res.json())
        .then( data => {
          let filterProducts = [];
          data.forEach(prod => {
            if(category == undefined || category == 'all') {
              filterProducts.push(prod);
            } else if (category == 'diets' && prod.description == 'Dieta' ) {
              filterProducts.push(prod);
            } else if (category == 'rutins' && prod.description == 'Rutina' ) {
              filterProducts.push(prod);
            } else if (category == 'combos' && prod.description == 'Paquete' ) {
              filterProducts.push(prod);
            } else if (category == 'promos' && prod.description == 'Promoción' ) {
              filterProducts.push(prod);
            }
          });
          setProduct(filterProducts);
  
        })
        .catch( error => console.error( error ))
    },[category])




    //     const getItem = new Promise ((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve([
    //                 {id: 'mouse_7B', type: 'Mouse', title: 'Gaming Mouse', description: '7 button gaming mouse', regularPrice: 220, picture1Url: 'img/mouse2.jpeg'}
    //             ]);
    //         }, 2000);
    //     });

    //     getItem
    //         .then((result) => {
    //             setItem(result[0]);
    //         });
    // }, [])

    return (
        <>
            {item ? <ProductDetail item={item} /> : console.log('item undefined') }
        </ >
    )
}
