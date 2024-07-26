import Card from "./card";

const array = [
  {
    title: "Shared Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://img.freepik.com/premium-vector/data-pipeline-icon-vector-image-can-be-used-data-science_120816-350430.jpg?w=1380",
  },
  {
    title: "Dedicated Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://img.freepik.com/premium-vector/cloud-database-icon-vector-image-can-be-used-online-marketing_120816-308790.jpg?w=1380",
  },
  {
    title: "Cloud Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./cloud-server.png",
  },
  {
    title: "VPS Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./cloud-storage.png",
  },
  {
    title: "Wordpress Hosting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./marketing.png",
  },
  {
    title: "Domain Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "./maintenance.png",
  },
];
function Services() {
  return (
    <div className="p-10">
      <h1 className="text-4xl text-center py-10 font-semibold">Our Services</h1>
      <Card data={array} />
    </div>
  );
}

export default Services;
