import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';
const { act, create } = renderer;

describe('ProductCard', () => {
  test('Should show the component successfully', () => {
    // Arrange
    const wrapper = create(
      <ProductCard product={product1}>
        {
          () => (<h1>Product Card JD1927</h1>)
        }
      </ProductCard>
    );
    // Act
    // Assert
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Should increase the counter', () => {
    // Arrange
    const wrapper = create(
      <ProductCard
        product={product1}
        initialValues={{ count: 4, maxCount: 10 }}>
        {
          ({ count, increaseBy, maxCount }) => (
            <>
              <h1>Product Card JD1927</h1>
              <span>{count}</span>
              <span>{maxCount}</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );
    // Act
    let tree = wrapper.toJSON() as any;
    // Assert
    expect(tree).toMatchSnapshot();

    act(() => {
      tree.children[3].props.onClick();
    });
    tree = wrapper.toJSON();

    expect(tree.children[2].children[0]).toBe('10');
    expect(tree.children[1].children[0]).toBe('4');
  });
});
