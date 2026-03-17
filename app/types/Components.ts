export type FilterProps = {
  id: string;
  title: string;
  type: string;
  options: string[];
};

export type ButtonProps = {
  children: React.ReactNode;
  type?: "reset" | "submit" | "button";
  variant: "brown" | "white";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type OrderInformationProps = {
  name: string;
  lastName: string;
  email: string;
  telephone: string;
  city: string;
  postOffice: string;
};

export type OrderActionTypeProps = {
  type: "change_field";
  field: string;
  value: string;
};
