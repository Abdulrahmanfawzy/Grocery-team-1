import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Apple,
    BadgePercent,
    Banknote,
    Check,
    CreditCard,
    LockKeyhole,
    Plus,
    WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
    Field,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";

import { useCart } from "@/features/Cart/hooks/useCart";
import CartItem from "@/features/Cart/components/CartItem";

import type {
    CheckoutData,
    PaymentInfo,
} from "../../types/checkout.types";
import { useAddresses } from "../../hooks/useAddresses";
interface PaymentStepsProps {
    data: CheckoutData;
    onChange: (data: CheckoutData) => void;
    onContinue: () => void;
    onBack: () => void;
}

const paymentSchema = z.object({
    paymentMethod: z.enum([
        "card",
        "cash",
        "apple-pay",
        "google-pay",
        "wallet",
    ]),
    selectedCard: z.string(),
    cardNumber: z.string(),
    expiry: z.string(),
    cvv: z.string(),
    promoCode: z.string(),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

const savedCards = [
    {
        id: "mastercard-8888",
        type: "Mastercard",
        last4: "8888",
        expiry: "08/26",
    },
    {
        id: "visa-4242",
        type: "Visa",
        last4: "4242",
        expiry: "12/25",
    },
];

const otherPaymentMethods = [
    {
        id: "cash" as const,
        title: "Cash on Delivery",
        description: "Pay when you receive your order",
        icon: Banknote,
    },
    {
        id: "apple-pay" as const,
        title: "Apple Pay",
        description: "Quick checkout with Apple Pay",
        icon: Apple,
    },
    {
        id: "google-pay" as const,
        title: "Google Pay",
        description: "Quick checkout with Google Pay",
        icon: WalletCards,
    },
    {
        id: "wallet" as const,
        title: "Wallet Pay",
        description: "Digital wallet payment",
        icon: WalletCards,
    },
];

export const PaymentSteps = ({
    data,
    onChange,
    onContinue,
}: PaymentStepsProps) => {
    const { data: cartData } = useCart();
const { defaultAddress } = useAddresses(false);
    const form = useForm<PaymentFormValues>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            paymentMethod:
                data.payment.paymentMethod === "card" ||
                    data.payment.paymentMethod === "cash" ||
                    data.payment.paymentMethod === "apple-pay" ||
                    data.payment.paymentMethod === "google-pay" ||
                    data.payment.paymentMethod === "wallet"
                    ? data.payment.paymentMethod
                    : "card",

            selectedCard: "mastercard-8888",
            cardNumber: "",
            expiry: "",
            cvv: "",
            promoCode: "",
        },
    });

    const paymentMethod = form.watch("paymentMethod");
    const selectedCard = form.watch("selectedCard");

   const subtotal =
  cartData?.items?.reduce(
    (total, item) =>
      total +
      Number(item.product.discount_price || item.product.price) *
        item.quantity,
    0,
  ) ?? 0;

const shipping = 0;
const total = subtotal + shipping;
    const handleSubmit = (values: PaymentFormValues) => {
        onChange({
            ...data,
            payment: {
                ...data.payment,
                paymentMethod:
                    values.paymentMethod as PaymentInfo["paymentMethod"],
            },
        });

        onContinue();
    };

    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-10"
        >
            <main className="box-container pb-16 ">
                {/* Payment Method */}
                <section className=" rounded-xl border border-border-color bg-white shadow-card-shadow">
                    <div className="p-5 md:p-6">
                        <h2 className="text-sm font-semibold text-foreground">
                            Payment Method
                        </h2>
                    </div>

                    {/* Secure Checkout */}
                    <div className="mx-3 rounded-lg bg-border-color md:mx-4">
                        <div className="flex items-center gap-3 px-4 py-4 md:px-5">
                            <LockKeyhole
                                size={18}
                                className="shrink-0 text-app-main"
                            />

                            <div>
                                <p className="mb-1 text-sm font-medium text-app-main">
                                    Secure Checkout
                                </p>

                                <p className="text-xs text-app-muted md:text-sm ">
                                    Your information is encrypted and secure.
                                    We never store your full card details.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 p-4 md:p-6 lg:grid-cols-2">
                        {/* Saved Cards */}
                        <div>
                            <h3 className="mb-4 text-base font-semibold text-foreground">
                                Saved Cards
                            </h3>

                            <Controller
                                name="selectedCard"
                                control={form.control}
                                render={({ field }) => (
                                    <div className="space-y-3">
                                        {savedCards.map((card) => {
                                            const isSelected =
                                                paymentMethod === "card" &&
                                                selectedCard === card.id;

                                            return (
                                                <button
                                                    key={card.id}
                                                    type="button"
                                                    onClick={() => {
                                                        field.onChange(card.id);
                                                        form.setValue(
                                                            "paymentMethod",
                                                            "card",
                                                        );
                                                    }}
                                                    className={`
                            flex min-h-[52px] w-full items-center
                            gap-4 rounded-lg border px-4 text-left
                            transition
                            ${isSelected
                                                            ? "border-app-main"
                                                            : "border-border-color hover:border-app-main"
                                                        }
                          `}
                                                >
                                                    <CardBrand type={card.type} />

                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-foreground">
                                                            {card.type} •••• {card.last4}
                                                        </p>

                                                        <p className="mt-1 text-[11px] text-app-muted">
                                                            Expires {card.expiry}
                                                        </p>
                                                    </div>

                                                    {isSelected && (
                                                        <Check
                                                            size={16}
                                                            className="text-app-main"
                                                        />
                                                    )}
                                                </button>
                                            );
                                        })}

                                        {/* Add New Card */}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                field.onChange("new-card");
                                                form.setValue(
                                                    "paymentMethod",
                                                    "card",
                                                );
                                            }}
                                            className={`
                        flex min-h-[40px] w-full items-center
                        gap-4 rounded-lg border px-4 text-sm
                        transition
                        ${selectedCard === "new-card"
                                                    ? "border-app-main text-app-main"
                                                    : "border-border-color text-foreground hover:border-app-main"
                                                }
                      `}
                                        >
                                            <Plus
                                                size={17}
                                                className="text-app-main"
                                            />

                                            <span>Add New Card</span>
                                        </button>
                                    </div>
                                )}
                            />

                            {/* New Card */}
                            {paymentMethod === "card" &&
                                selectedCard === "new-card" && (
                                    <div className="mt-5 rounded-lg border border-border-color p-4">
                                        <div className="mb-4 flex items-center gap-2">
                                            <CreditCard
                                                size={18}
                                                className="text-app-main"
                                            />

                                            <h4 className="text-sm font-semibold text-foreground">
                                                New Card Details
                                            </h4>
                                        </div>

                                        <div className="space-y-4">
                                            <Controller
                                                name="cardNumber"
                                                control={form.control}
                                                rules={{
                                                    required: "Card number is required",
                                                    minLength: {
                                                        value: 12,
                                                        message:
                                                            "Enter a valid card number",
                                                    },
                                                }}
                                                render={({
                                                    field,
                                                    fieldState,
                                                }) => (
                                                    <Field
                                                        data-invalid={fieldState.invalid}
                                                    >
                                                        <FieldLabel htmlFor="cardNumber">
                                                            Card Number
                                                        </FieldLabel>

                                                        <Input
                                                            {...field}
                                                            id="cardNumber"
                                                            placeholder="1234 5678 9012 3456"
                                                            aria-invalid={
                                                                fieldState.invalid
                                                            }
                                                            className="mt-2 h-10 border-border-color"
                                                        />

                                                        {fieldState.invalid && (
                                                            <FieldError
                                                                errors={[fieldState.error]}
                                                            />
                                                        )}
                                                    </Field>
                                                )}
                                            />

                                            <div className="grid grid-cols-2 gap-3">
                                                <Controller
                                                    name="expiry"
                                                    control={form.control}
                                                    rules={{
                                                        required:
                                                            "Expiry date is required",
                                                    }}
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <Field
                                                            data-invalid={
                                                                fieldState.invalid
                                                            }
                                                        >
                                                            <FieldLabel htmlFor="expiry">
                                                                Expiry Date
                                                            </FieldLabel>

                                                            <Input
                                                                {...field}
                                                                id="expiry"
                                                                placeholder="MM / YY"
                                                                aria-invalid={
                                                                    fieldState.invalid
                                                                }
                                                                className="mt-2 h-10 border-border-color"
                                                            />

                                                            {fieldState.invalid && (
                                                                <FieldError
                                                                    errors={[
                                                                        fieldState.error,
                                                                    ]}
                                                                />
                                                            )}
                                                        </Field>
                                                    )}
                                                />

                                                <Controller
                                                    name="cvv"
                                                    control={form.control}
                                                    rules={{
                                                        required: "CVV is required",
                                                    }}
                                                    render={({
                                                        field,
                                                        fieldState,
                                                    }) => (
                                                        <Field
                                                            data-invalid={
                                                                fieldState.invalid
                                                            }
                                                        >
                                                            <FieldLabel htmlFor="cvv">
                                                                CVV
                                                            </FieldLabel>

                                                            <Input
                                                                {...field}
                                                                id="cvv"
                                                                type="password"
                                                                placeholder="123"
                                                                aria-invalid={
                                                                    fieldState.invalid
                                                                }
                                                                className="mt-2 h-10 border-border-color"
                                                            />

                                                            {fieldState.invalid && (
                                                                <FieldError
                                                                    errors={[
                                                                        fieldState.error,
                                                                    ]}
                                                                />
                                                            )}
                                                        </Field>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                            {/* Promo Code */}
                            <div className="mt-6">
                                <div className="mb-3 flex items-center gap-2">
                                    <BadgePercent
                                        size={18}
                                        className="text-app-muted"
                                    />

                                    <h3 className="text-sm font-medium text-foreground">
                                        Promo Code
                                    </h3>
                                </div>

                                <div className="rounded-lg border border-border-color p-3">
                                    <div className="flex gap-2">
                                        <Controller
                                            name="promoCode"
                                            control={form.control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="SAVE10"
                                                    className="h-9 flex-1 border-border-color"
                                                />
                                            )}
                                        />

                                        <Button
                                            type="button"
                                            className="h-9 bg-app-muted px-5 text-xs text-white hover:bg-app-main"
                                        >
                                            Apply Code
                                        </Button>
                                    </div>

                                    <p className="mt-2 text-[9px] text-app-muted">
                                        Try: SAVE10 Or WELCOME20
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Other Payment Methods */}
                        <div>
                            <h3 className="mb-4 text-base font-semibold text-foreground">
                                Other Payment Methods
                            </h3>

                            <Controller
                                name="paymentMethod"
                                control={form.control}
                                render={({ field }) => (
                                    <div className="space-y-3">
                                        {otherPaymentMethods.map((method) => {
                                            const Icon = method.icon;
                                            const isSelected =
                                                field.value === method.id;

                                            return (
                                                <button
                                                    key={method.id}
                                                    type="button"
                                                    onClick={() =>
                                                        field.onChange(method.id)
                                                    }
                                                    className={`
                            flex min-h-[52px] w-full items-center
                            gap-4 rounded-lg border px-4 text-left
                            transition
                            ${isSelected
                                                            ? "border-app-main bg-app-light-gray"
                                                            : "border-border-color hover:border-app-main"
                                                        }
                          `}
                                                >
                                                    <Icon
                                                        size={19}
                                                        className={
                                                            isSelected
                                                                ? "text-app-main"
                                                                : "text-app-muted"
                                                        }
                                                    />

                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-foreground">
                                                            {method.title}
                                                        </p>

                                                        <p className="mt-1 text-[11px] text-app-muted">
                                                            {method.description}
                                                        </p>
                                                    </div>

                                                    {isSelected && (
                                                        <Check
                                                            size={16}
                                                            className="text-app-main"
                                                        />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </section>

                {/* Order Summary */}
                <section className="mt-12">
                    <h2 className="mb-4 text-base font-semibold text-foreground">
                        Order Summary
                    </h2>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.9fr]">
                        {/* Products */}
                        <div className="overflow-hidden rounded-lg border border-border-color bg-white shadow-card-shadow">
                            <div className="max-h-[500px] overflow-y-auto">
                                {cartData?.items?.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="rounded-lg border border-border-color bg-white p-5 shadow-card-shadow">
                            <h3 className="mb-6 text-base font-semibold text-foreground">
                                Total Amount
                            </h3>

                            <div className="flex justify-between text-sm text-app-muted">
                                <span>Subtotal</span>
                                <span>£ {subtotal.toFixed(2)}</span>
                            </div>

                            <div className="mt-3 flex justify-between text-sm text-app-muted">
                                <span>Shipping</span>
                                <span>£ {shipping.toFixed(2)}</span>
                            </div>

                            <div className="my-3 border-t border-border-color" />

                            <div className="flex justify-between text-sm font-semibold text-foreground">
                                <span>Total</span>
                                <span>£ {total.toFixed(2)}</span>
                            </div>
                            <div className="my-4 border-t border-border-color" />

                            <div className="pt-1">
                                <h4 className="text-sm font-semibold text-foreground">
                                    Billing Address
                                </h4>

                                <div className="mt-3 flex items-center gap-2 text-xs text-app-muted">
                                    <Check
                                        size={15}
                                        className="text-app-main"
                                    />

                                    <span>
                                        Billing address same as delivery address
                                    </span>
                                </div>

                                <div className="mt-3 rounded-lg bg-app-light-gray p-3 text-xs leading-5 text-app-muted">
                                    <p className="font-semibold text-foreground">
                                        Billing address will be:
                                    </p>

                                    <p>
  {defaultAddress
    ? `${defaultAddress.address}, ${defaultAddress.city}, ${defaultAddress.provenance}, ${defaultAddress.postal_code}`
    : "No address found"}
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Actions */}
                <div className="mt-10 flex flex-col gap-4">
                    <Button
                        type="submit"
                        className="h-11 w-full max-w-[280px] rounded-md bg-app-main text-sm font-normal text-white hover:bg-app-main/90"
                    >
                        Confirm Payment & Go To Checkout
                    </Button>
                </div>
            </main>
        </form>
    );
};

/* Card Brand */

function CardBrand({ type }: { type: string }) {
    if (type === "Visa") {
        return (
            <div className="flex h-8 w-9 items-center justify-center text-[9px] font-bold italic text-[#1a4ba0]">
                VISA
            </div>
        );
    }

    return (
        <div className="relative flex h-8 w-9 items-center justify-center">
            <span className="absolute left-1 h-4 w-4 rounded-full bg-[#eb001b]" />
            <span className="absolute right-1 h-4 w-4 rounded-full bg-[#f79e1b]" />

            <span className="relative z-10 text-[5px] font-bold text-white">
                MC
            </span>
        </div>
    );
}