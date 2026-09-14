type Product = {
  id: string;
  name: string;
  quantity: number;
  image: string;
};



export default function ProductItem({ product }: { product: Product }) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-1
        items-center
        gap-2
        rounded-lg
        bg-[#f5fafc]
        px-3
        py-2.5
      "
    >
      {/* Image */}
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-md
          bg-white
          text-lg
        "
      >
        {product.image}
      </div>

      {/* Info */}
      <div className="min-w-0">
        <p className="truncate text-md font-medium text-slate-700">{product.name}</p>

        <p className="mt-0.5 text-[12px] text-slate-400">Qty : {product.quantity}</p>
      </div>
    </div>
  )
}
