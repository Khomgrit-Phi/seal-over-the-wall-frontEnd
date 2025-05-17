import { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

import backIcon from '/assets/images/productDetail/Back.svg';
import fast from '/assets/images/productDetail/fast.svg';
import logoFrontShirt from '/assets/images/productDetail/front.svg';
import park from '/assets/images/productDetail/park.svg';
import thaiFlag from '/assets/images/productDetail/thai-flag.svg';
import wash from '/assets/images/productDetail/Wash.svg';

import BreadcrumbTop from '../components/mainMenu/BreadcrumbTop';
import Creator from '../components/ProductDetailPage/Creator';
import ProductPreview from '../components/ProductDetailPage/ProductPreview';
import ProductRelate from '../components/ProductDetailPage/ProductRelate';
import SizeSelector from '../components/ProductDetailPage/SizeSelector';
import FavoriteMenu from '../components/productPage/FavoriteMenu';
import { Skeleton } from '../components/ui/skeleton';

import { useAuth } from '../context/AuthContext';
import { getProductById } from '../services/product';

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addItemToCart } = useAuth();

  // Debug log 1: Check productId from route
  console.log('🧪 productId from URL:', productId);

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedProduct = await getProductById(productId);
        console.log('🧪 API product response:', fetchedProduct); // Debug log 2
        setProduct(fetchedProduct);
      } catch (err) {
        console.error('❌ Error fetching product by ID:', err);
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [productId]);

  // Debug log 3: Watch product state
  useEffect(() => {
    console.log('🧪 product state after fetch:', product);
  }, [product]);

  if (loading) {
    return (
      <div className="flex mx-auto w-full flex-col items-center justify-center py-4">
        <div className="w-[15rem] max-w-[400px] mx-auto mb-4">
          <Skeleton className="h-[15rem] w-full rounded-lg" />
        </div>
        <div className="mt-4 w-full max-w-[400px] mx-auto">
          <div className="flex gap-2 my-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="flex-1 h-[11rem] rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!product || error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error || 'Product not found or could not be loaded.'}
      </div>
    );
  }

  return (
    <>
      <div className="mt-25 mb-4 pl-10">
        <BreadcrumbTop />
      </div>

      <ProductPreview images={product.images} />

      <section className="w-400 mx-auto">
        <Creator />

        <div className="flex justify-between py-8">
          <div>
            <h5 className="text-[40px] font-semibold">{product.title || 'Untitled Product'}</h5>
            <p className="text-2xl mt-4">{product.price} THB</p>

            <div className="flex gap-4 mt-6">
              <p className="text-2xl font-semibold">Sizes</p>
              <p className="underline cursor-pointer">View size chart</p>
            </div>

            <div className="flex gap-4 mt-4">
              {product?.sizes?.map((size) => (
                <SizeSelector
                  key={size}
                  size={size}
                  className={selectedSize === size ? 'border-blue-500' : 'border-gray-300'}
                  onClick={() => setSelectedSize(size)}
                />
              ))}
            </div>

            <p className="text-2xl font-semibold mt-6">Colors</p>
            <div className="flex gap-4 mt-4">
              {product?.colors?.map((color) => (
                <div
                  key={color}
                  className={`w-10 h-10 rounded-full cursor-pointer border ${
                    selectedColor === color ? 'border-4 border-blue-500' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <h5 className="text-2xl font-semibold">Print areas</h5>
            <div className="flex gap-8 my-4">
              <img src={logoFrontShirt} alt="Front print" className="h-[72px] w-auto" />
              <img src={backIcon} alt="Back print" className="h-[72px] w-auto" />
            </div>

            <p className="text-xl mt-6">
              30% of the money made from this campaign will be donated to Shelter. Designed by
              <strong> @Artists Lalala</strong> on Instagram.
            </p>

            <button className="p-2 mt-2 rounded-md border border-gray-300">Read More</button>

            <div className="flex gap-4 mt-6 flex-wrap">
              {['custom', 't-shirt', 'collection', 'Artists Lalala'].map((tag) => (
                <button key={tag} className="p-2 rounded-md bg-gray-300 text-xl">
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-4 justify-end mt-12">
              <button
                className="bg-[#334DD8] px-12 py-2 rounded-full text-white"
                onClick={() => {
                  if (!selectedSize || !selectedColor) {
                    alert('Please select a size and color.');
                    return;
                  }

                  const item = {
                    productId: product._id,
                    unitPrice: product.price,
                    selectedImage: product.images?.[0],
                    selectedSize,
                    selectedColor,
                    quantity: 1,
                  };

                  addItemToCart(item);
                  alert('Item added to cart!');
                }}
              >
                Add to cart
              </button>
              <FavoriteMenu />
            </div>
          </div>
        </div>

        <div className="flex p-4 border rounded-2xl mt-6">
          <div className="w-2/5 px-10 border-r">
            <img src={wash} alt="" className="inline w-12" />
            <h6 className="inline text-2xl font-semibold ml-2">Garment care</h6>
            <p className="text-xl mt-4">
              Love your garment and it will love you back. Being gentle is easy and better for the planet.
            </p>
            <ul className="mt-4 text-xl space-y-2">
              {[
                'Wash garment inside out',
                'Only wash on a cold cycle',
                'Do not tumble dry',
                'Iron inside out',
              ].map((tip, idx) => (
                <li key={idx} className="flex items-center">
                  <RiArrowRightSLine className="mr-2" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-3/5 pl-20 pr-10">
            <div className="flex gap-8 border-b pb-4">
              <div>
                <img src={park} alt="Park" className="inline w-12" />
                <h6 className="inline text-2xl font-semibold ml-2">Most shipping options</h6>
                <p className="text-xl mt-2">From <strong className="text-2xl font-semibold">60 THB</strong></p>
                <p>Choose from Economy or Standard shipping</p>
              </div>
              <div>
                <img src={fast} alt="Fast" className="inline w-12" />
                <h6 className="inline text-2xl font-semibold ml-2">Fastest Delivery</h6>
                <p className="text-xl mt-2">1 day (Bangkok only)</p>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="text-xl">Location</h6>
              <div className="flex gap-2 items-center">
                <img src={thaiFlag} alt="Thai flag" className="w-6 h-auto mt-2" />
                <p>Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductRelate />
    </>
  );
};

export default ProductDetail;
