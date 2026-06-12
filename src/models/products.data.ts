export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  quantitySelected: number;
}

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro',
    description: 'The latest iPhone with titanium design, powerful A17 Pro chip, and advanced pro camera system.',
    price: 999,
    category: 'smartphones',
    stock: 5,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Experience ultimate mobile innovation with Galaxy AI, a 200MP camera, and built-in S Pen.',
    price: 1199,
    category: 'smartphones',
    stock: 2,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 3,
    title: 'MacBook Pro 16',
    description: 'Supercharged by M3 Max chip, built for developers, creators, and professionals needing extreme speed.',
    price: 2499,
    category: 'laptops',
    stock: 0,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 4,
    title: 'Dell XPS 13',
    description: 'Sleek, ultra-thin laptop featuring Intel Core Ultra processors and a stunning infinity-edge display.',
    price: 1399,
    category: 'laptops',
    stock: 12,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 5,
    title: 'iPad Pro M4',
    description: 'Impossibly thin design with the breakthrough Ultra Retina XDR display and outrageous M4 performance.',
    price: 999,
    category: 'tablets',
    stock: 7,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 6,
    title: 'Xiaomi Redmi Note 13',
    description: 'Super-clear 108MP triple camera, 120Hz FHD+ AMOLED display, and immersive viewing with ultra-thin bezels.',
    price: 250,
    category: 'smartphones',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 7,
    title: 'Lenovo IdeaPad Slim 3',
    description: 'Travel light and work efficiently with a smart, reliable, entry-level military-grade durable laptop.',
    price: 450,
    category: 'laptops',
    stock: 1,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 8,
    title: 'Samsung Galaxy Tab A9',
    description: 'Classic and contemporary tablet styling with smooth gaming performance and expansive, bright visuals.',
    price: 150,
    category: 'tablets',
    stock: 0,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  },
  {
    id: 9,
    title: 'Google Pixel 8 Pro',
    description: 'The all-pro phone engineered by Google. It has the best of Google AI, and the most advanced Pixel camera.',
    price: 899,
    category: 'smartphones',
    stock: 4,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60',
    quantitySelected: 0
  }
];
