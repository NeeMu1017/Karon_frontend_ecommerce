import side1 from "../../image/slidewindows/slidewin1.jpg";
import side2 from "../../image/slidewindows/slidewin2.jpg";
import side3 from "../../image/slidewindows/slidewin3.jpg";
import side4 from "../../image/slidewindows/slidewin4.jpg";
import side5 from "../../image/slidewindows/slidewin5.jpg";
import side6 from "../../image/slidewindows/slidwin6.jpg";
import side7 from "../../image/slidewindows/slidewin7.jpg";

const Mobile_Computer = [
  "mobilephone",
  "computer",
  "mobile associates",
  "computer associates",
];
const categoryarr = [
  "mobile, computer",
  "tv, appliances, electronics",
  "men's fashion",
  "women's fashion",
  "home, kitchen, pets",
  "beauty, health, grocery",
  "spots, fitness, bags",
  "toy, baby products, kid's fashion ",
  "car, bike",
  "books",
  "espots, video game",
  "ecard",
];
const Tv_Appliances_Electronics = [
  "television",
  "headphone",
  "speaker",
  "home appliances",
  "kitchen",
];
const Men_Fashion = [
  "T-shirt",
  "shirt",
  "jeans",
  "innewear",
  "sunglass",
  "jewellery",
  "wallets",
  "bag",
  "shoes",
];
const Women_Fashion = [
  "T-shirt",
  "western wear ",
  "ethnic wear ",
  "jeans",
  "sunglass",
  "jewellery",
  "hand bag",
  "bag",
  "shoes",
];
const Home_Kitchen_Pets = [
  "kitchen",
  "showroom",
  "fine art",
  "furniture",
  "bedroom linen",
  "home decoration",
  "garden",
  "indoor lighting",
  "dog supplies",
];
const Beauty_Health_Grocery = [
  "beatuty",
  "luxury beatuty",
  "make up",
  "heath & personal care",
  "pharmarcy",
  "snack food",
  "coffee tea ",
];
export const subcategory = [
  ...Mobile_Computer,
  ...Men_Fashion,
  ...Beauty_Health_Grocery,
  ...Home_Kitchen_Pets,
  ...Tv_Appliances_Electronics,
];
export const category = [
  {
    name: categoryarr[0],
    subcategory: Mobile_Computer,
  },
  {
    name: categoryarr[1],
    subcategory: Tv_Appliances_Electronics,
  },

  {
    name: categoryarr[2],
    subcategory: Men_Fashion,
  },
  {
    name: categoryarr[3],
    subcategory: Women_Fashion,
  },
  {
    name: categoryarr[4],
    subcategory: Home_Kitchen_Pets,
  },
  {
    name: categoryarr[5],
    subcategory: Beauty_Health_Grocery,
  },
];
export const sidewin =[
  {
    id:1,
    name:side1
  },
  {
    id:2,
    name:side2
  },
  {
    id:3,
    name:side3
  },
  {
    id:4,
    name:side4
  },
  {
    id:5,
    name:side5
  },
  {
    id:6,
    name:side6
  },
  {
    id:7,
    name:side7,
  },
]