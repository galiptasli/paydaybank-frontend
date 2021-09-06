import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  Table,Button } from 'semantic-ui-react'
import ProductService from '../services/productService';


export default function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        let produtservice = new ProductService()
        produtservice.getProducts().then(result=> setProducts(result.data.data))
    },[])
    return (
        <div>
            <Table  celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><h3>ürün ismi</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>açıklaması</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>fiyatı</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>stok durumu</h3></Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {products.map((product) => (
            <Table.Row key ={product.id}>
             <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.available.toString()}</Table.Cell>
              <Table.Cell> 
                <Link to={"/Dashboard/ProductList/ProductDetails/"+product.id}>
                   <Button size='big' primary >Detay</Button> 
                </Link>
                <Button color='red'>Sil</Button>
                </Table.Cell>
              
            </Table.Row>
          ))}
    </Table.Body>

   
  </Table>
  <Link to={"/Dashboard/ProductList/ProductAdd"}>
  <Button size='big' primary>Yeni Ürün Ekle</Button>
  </Link>
        </div>
    )
}
