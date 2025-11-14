import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // مثال لجلب بيانات من API
    fetch(`https://api.example.com/product/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const ogImage = `/api/og?title=${encodeURIComponent(product.title)}&desc=${encodeURIComponent(product.description)}&img=${encodeURIComponent(product.image)}`;

  return (
    <div>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
