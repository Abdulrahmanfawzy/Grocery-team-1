import { Link } from "react-router-dom";

import type { CheckoutStep } from "../types/checkout.types";

interface CheckoutBreadcrumbProps {
  currentStep: CheckoutStep;
}

const stepLabels: Record<CheckoutStep, string> = {
  1: "shipping",
  2: "payment",
  3: "review",
};

export const CheckoutBreadcrumb = ({
  currentStep,
}: CheckoutBreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-app-muted"
    >
      <Link
        to="/"
        className="transition-colors hover:text-app-main"
      >
        Home
      </Link>

      <span className="mx-2">/</span>

      <Link
        to="/products"
        className="transition-colors hover:text-app-main"
      >
        Fresh Products
      </Link>

      <span className="mx-2">/</span>

      <Link
        to="/cart"
        className="transition-colors hover:text-app-main"
      >
        Cart
      </Link>

      <span className="mx-2">/</span>

      <span className="font-medium text-foreground">
        Checkout ({stepLabels[currentStep]})
      </span>
    </nav>
  );
};

export default CheckoutBreadcrumb;
