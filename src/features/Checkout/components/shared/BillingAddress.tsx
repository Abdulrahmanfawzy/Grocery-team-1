import { Check } from "lucide-react";

interface BillingAddressProps {
    address: string;
}

export const BillingAddress = ({ address }: BillingAddressProps) => {
    return (
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

                <p>{address}</p>
            </div>
        </div>
    );
};