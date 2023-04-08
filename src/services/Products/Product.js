import brandLogo from "../../assests/images/brandLogo.svg";
import color1 from "../../assests/images/color1.png";
import color2 from "../../assests/images/color2.png";
import product1 from "../../assests/images/product1.png";
import product2 from "../../assests/images/product2.png";
import product3 from "../../assests/images/product3.png";
import product4 from "../../assests/images/product4.png";
import product5 from "../../assests/images/product5.png";
import similarProduct1 from "../../assests/images/similarProduct1.png";
import similarProduct2 from "../../assests/images/similarProduct2.png";
import similarProduct3 from "../../assests/images/similarProduct3.png";
import similarProduct4 from "../../assests/images/similarProduct4.png";

const Products = [
  {
    id: 1,
    brandLogo: brandLogo,

    // List of path to the current page
    breadcrumb: [
      { pageName: "Men", path: "/" },
      { pageName: "Clothing", path: "/" },
      { pageName: "Tops", path: "/" },
      { pageName: "Adidas", path: "/" },
      { pageName: "Adidas Black T-Shirt", path: "/" },
    ],
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    mainCategory: "Men",
    rateValue: 4.9,
    totalCountOfRates: 20,
    price: "9,999",
    discountPercentage: 30,
    priceAfterDiscount: 9000,
    currency: "LE",

    // List of similar sizes
    sizes: [
      { id: "1", value: "Small" },
      { id: "2", value: "Medium" },
      { id: "3", value: "Large" },
      { id: "4", value: "X Large" },
      { id: "5", value: "XX Large" },
    ],

    // List of similar colors
    colors: [
      { id: 1, imageSrc: color1 },
      { id: 2, imageSrc: color2 },
    ],

    // List of similar images
    images: [
      { id: 1, imageSrc: product1 },
      { id: 2, imageSrc: product2 },
      { id: 3, imageSrc: product3 },
      { id: 4, imageSrc: product4 },
      { id: 5, imageSrc: product5 },
    ],

    // List of similar products
    similarProducts: [
      {
        id: 1,
        imageSrc: similarProduct1,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        rateValue: 4,
        totalCountOfRates: 2,
        price: "9,999",
        discountPercentage: 30,
        priceAfterDiscount: "9000",
        shippingAvailability: false,
        storeAvailability: true,
        storeName: "Genena Mall",
        shippingFrom: "",
        shippingTo: "",
        shippingDuration: "",
      },
      {
        id: 2,
        imageSrc: similarProduct2,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        totalCountOfRates: 2,
        rateValue: 2,
        price: "9,999",
        discountPercentage: 0,
        priceAfterDiscount: "9000",
        shippingAvailability: true,
        storeAvailability: false,
        storeName: "",
        shippingFrom: "UK",
        shippingTo: "Egypt",
        shippingDuration: "2 Days",
      },
      {
        id: 3,
        imageSrc: similarProduct3,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        totalCountOfRates: 2,
        rateValue: 2,
        price: "9,999",
        discountPercentage: 30,
        priceAfterDiscount: "9000",
        shippingAvailability: true,
        storeAvailability: false,
        storeName: "",
        shippingFrom: "UK",
        shippingTo: "Egypt",
        shippingDuration: "2 Days",
      },
      {
        id: 4,
        imageSrc: similarProduct4,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        rateValue: 4,
        totalCountOfRates: 2,
        price: "9,999",
        discountPercentage: 30,
        priceAfterDiscount: "9000",
        shippingAvailability: false,
        storeAvailability: true,
        storeName: "Genena Mall",
        shippingFrom: "",
        shippingTo: "",
        shippingDuration: "",
      },
      {
        id: 5,
        imageSrc: similarProduct1,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        totalCountOfRates: 2,
        rateValue: 2,
        price: "9,999",
        discountPercentage: 30,
        priceAfterDiscount: "9000",
        shippingAvailability: true,
        storeAvailability: false,
        storeName: "",
        shippingFrom: "UK",
        shippingTo: "Egypt",
        shippingDuration: "2 Days",
      },
      {
        id: 6,
        imageSrc: similarProduct3,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        totalCountOfRates: 5,
        rateValue: 3,
        price: "999",
        discountPercentage: 21,
        priceAfterDiscount: "900",
        shippingAvailability: true,
        storeAvailability: false,
        storeName: "",
        shippingFrom: "US",
        shippingTo: "Egypt",
        shippingDuration: "13 Days",
      },
      {
        id: 7,
        imageSrc: similarProduct4,
        brandLogo: brandLogo,
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        totalCountOfRates: 2,
        rateValue: 2,
        price: "9,999",
        discountPercentage: 30,
        priceAfterDiscount: "9000",
        shippingAvailability: true,
        storeAvailability: false,
        storeName: "",
        shippingFrom: "UK",
        shippingTo: "Egypt",
        shippingDuration: "2 Days",
      },
    ],
  },
];
export const getProductById = (id) => {
  if (id) {
    // Filter the Products array to find the product with the given id

    const element = Products.filter((element) => element.id === id);
    return element;
  }
  // If no ID is provided, return the first product in the array

  return Products[0];
};
