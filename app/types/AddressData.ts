export type AddressFeature = {
  properties: {
    formatted: string;
  };
};

export type AddressData = {
  features: AddressFeature[];
};
