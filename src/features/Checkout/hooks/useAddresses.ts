import { useQuery } from "@tanstack/react-query";

import {
  getAddresses,
  getAddressById,
} from "@/services/address.service";

export const useAddresses = () => {
  const addressesQuery = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });

  const defaultAddress = addressesQuery.data?.find(
    (address) => address.is_default === true,
  );

  return {
    ...addressesQuery,
    addresses: addressesQuery.data ?? [],
    defaultAddress,
    defaultAddressId: defaultAddress?.id,
  };
};

export const useAddress = (id: number | undefined) => {
  return useQuery({
    queryKey: ["address", id],
    queryFn: () => getAddressById(id as number),
    enabled: !!id,
  });
};