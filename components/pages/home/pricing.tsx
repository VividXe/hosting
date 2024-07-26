import Pcard from "./price.card";
const array = [
  {
    title: "Basic",
    price: "$9.99",
    features: ["10 GB Storage", "50 GB Bandwidth", "2 Email Accounts"],
  },
  {
    title: "Basic",
    price: "$9.99",
    features: ["10 GB Storage", "50 GB Bandwidth", "2 Email Accounts"],
  },
  {
    title: "Basic",
    price: "$9.99",
    features: ["10 GB Storage", "50 GB Bandwidth", "2 Email Accounts"],
  },
];
function Pricing() {
  return (
    <div className="font-semibold">
      <h1 className="text-center text-3xl">Pricing</h1>
      <Pcard data={array} />
    </div>
  );
}

export default Pricing;
