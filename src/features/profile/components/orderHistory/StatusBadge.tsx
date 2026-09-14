type Product = {
  id: string;
  name: string;
  quantity: number;
  image: string;
};

type Order = {
  id: string;
  date: string;
  itemsCount: number;
  status: "Completed" | "Pending" | "Cancelled";
  total: string;
  products: Product[];
  moreItems: number;
};

export default function StatusBadge({ status }: { status: Order['status'] }) {
  const styles = {
    Completed: 'bg-emerald-50 text-emerald-600',
    Pending: 'bg-amber-50 text-amber-600',
    Cancelled: 'bg-red-50 text-red-500',
  }

  return (
    <span
      className={`
        inline-flex
        rounded-sm
        px-2
        py-1
        text-xs
        font-medium
        ${styles[status]}
      `}
    >
      {status}
    </span>
  )
}
