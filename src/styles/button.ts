type ButtonSize = {
  [key: string]: {
    padding: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    borderRadius: string;
  };
};

export const buttonSizes: ButtonSize = {
  large: {
    padding: "14px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: "12px",
  },
  medium: {
    padding: "10px",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: "10px",
  },
  small: {
    padding: "8px",
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: 0.9,
    borderRadius: "8px",
  },
};

type ButtonVarient = {
  [key: string]: {
    backgroundColor: string;
    color: string;
  };
};

export const buttonVariants: ButtonVarient = {
  primary: {
    backgroundColor: "#3180f2",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#6B49F5",
    color: "#fff",
  },
  error: {
    backgroundColor: "#f63156",
    color: "#fff",
  },
  gray: {
    backgroundColor: "#ddd",
    color: "#333",
  },
  black: {
    backgroundColor: "#333",
    color: "#fff",
  },
};
