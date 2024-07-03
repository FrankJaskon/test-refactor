export type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type UserAddress = {
  street: string
  suit: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: UserAddress
};
