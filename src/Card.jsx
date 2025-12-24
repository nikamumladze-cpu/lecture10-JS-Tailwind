const ProductCard = ({ product }) => {
  const badgeColors = {
    Sale: "bg-red-500",
    New: "bg-green-500",
    Limited: "bg-purple-500",
  };

  return (
    <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg h-full">
      {product.badge && (
        <span
          className={`absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase z-10 ${
            badgeColors[product.badge] || "bg-gray-500"
          }`}>
          {product.badge}
        </span>
      )}

      <div className="w-full h-48 mb-4 flex-none overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500";
          }}
        />
      </div>

      <div className="w-full flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{product.description}</p>

        <div className="mt-auto flex items-center justify-between w-full pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const products = [
    {
      id: 1,
      title: "Stylish Coffee Mug",
      price: "$15.00",
      description: "Minimal ceramic mug for coffee or tea.",
      image:
        "https://images.unsplash.com/photo-1517256011271-121ba5f7bb9e?w=500",
      badge: "Sale",
    },
    {
      id: 2,
      title: "Modern Wrist Watch",
      price: "$120.00",
      description: "Elegant watch for everyday wear.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      badge: "New",
    },
    {
      id: 3,
      title: "Office Coffee Set",
      price: "$30.00",
      description: "Perfect cup set for office desks.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
      badge: null,
    },
    {
      id: 4,
      title: "Laptop",
      price: "$2800.00",
      description: "Apple brand Laptop and personal computer",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      badge: "Limited",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#1a1c23] hover:bg-black text-white px-8 py-3 rounded-md font-semibold text-sm cursor-pointer transition-all">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Card;
