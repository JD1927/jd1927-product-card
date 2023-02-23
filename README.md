# JD1927-Product-Card

This is a React test package used for deployments at NPM.

### Juan Aguirre

## Example

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'jdac-product-card';
```

```
<ProductCard
  key={`${product.title}-${product.id}`}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
  product={product}>
  {
    ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```