import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Should show the component successfully with the custom title', () => {
    // Arrange
    const wrapper = renderer.create(
      <ProductTitle title='Custom product' className='custom-class'/>
    );
    // Act
    // Assert
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Should show the component with the product name', () => {
    // Arrange
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (<ProductTitle/>)
        }
      </ProductCard>
    );
    // Act
    // Assert
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
