import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Should show the component successfully with the custom image', () => {
    // Arrange
    const wrapper = renderer.create(
      <ProductImage image='https://image.jpg' />
    );
    // Act
    // Assert
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Should show the component with the product image', () => {
    // Arrange
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (<ProductImage />)
        }
      </ProductCard>
    );
    // Act
    // Assert
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
