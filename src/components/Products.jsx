import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/product-actions';
import Item from './Item';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  useEffect(() => {
    if (products.length === 0) getProducts(dispatch);
  },[])

  return (
    <div className="Products m-5 d-flex flex-column align-items-center">
      
      {products[0] != null ? products[0].map(product => (
        <Item product={product}/>
      )) : <p>Loading</p>}
    </div>
  )
}
