module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prefer-const": "warn",
    "no-var": "warn",
    "no-unused-vars": "warn",
    "object-shorthand": "warn",
    "quote-props": ["warn", "as-needed"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": "warn",
  },
};
