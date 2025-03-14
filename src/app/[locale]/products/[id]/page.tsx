'use client'

import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import RelatedProducts from "@/components/products/RelatedProducts";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useTranslations } from "next-intl";

interface ProductData {
  price: number;
  description: string;
  rating: number;
  reviews: number;
}

// TODO(#56): Replace with actual data fetching from API
const mockProductData: ProductData = {
  price: 299.99,
  description: "High-quality product with premium features",
  rating: 4.5,
  reviews: 128
};

const ProductPage = () => {
  const t = useTranslations('Products');
  
  const breadcrumbItems = [
    { label: t('breadcrumb.home'), href: '/' },
    { label: t('title'), href: '/products' },
    { label: t('productName'), href: '', isCurrent: true }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl font-sans" aria-label="Products">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Product Layout - Ajustado para mejor responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 xl:gap-12">
        <div className="w-full">
          <ProductGallery />
        </div>

        <div className="w-full">
          <ProductInfo 
            price={mockProductData.price}
            description={mockProductData.description}
            rating={mockProductData.rating}
            reviews={mockProductData.reviews}
          />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12 lg:mt-16 mb-16 lg:mb-32">
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductPage;