import React from 'react';
import renderer from 'react-test-renderer'
import ProductTitle from '../../src/components/ProductTitle';
import ProductCard from '../../src/components/index';
import { products } from '../data/products';


describe('Product title', () => {
  test('Display the component correctly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Test Title" />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('Show the product name in the title', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
});
