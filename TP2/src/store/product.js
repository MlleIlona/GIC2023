import { defineStore } from 'pinia'


import Onion from "@/assets/food-icons/oignons.png";
import Vegetable from "@/assets/food-icons/vegetables.png";
import Yogurt from "@/assets/food-icons/yogurt.png";

import Burger from "@/assets/food-icons/burger.png";
import Apple from "@/assets/food-icons/apple.png";
import Kaki from "@/assets/food-icons/kaki.png";
import Kiwi from "@/assets/food-icons/kiwi.png";
import Cereal from "@/assets/food-icons/cereal.png";
import Blueberry from "@/assets/food-icons/blueberry.png";
import Letuce from "@/assets/food-icons/letuce.png";
import Headphone from "@/assets/food-icons/headphone.png";
import Chips from "@/assets/food-icons/chips.png";
import Orange from "@/assets/food-icons/orange.png";


export const productStore = defineStore('product', {
    state: () => ({ 
        groups: ["Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],
        categories : [
            {
              name : "Cake and Milk",
              nbItems : "14 items",
              couleur : "#F2FCE4",
              image : new URL(Burger,import.meta.url).href,
            },
            {
              name : "Peach",
              nbItems : "17 items",
              couleur : "#FFFCEB",
              image : new URL(Kaki,import.meta.url).href,
            },
            {
              name : "Organic Kiwi",
              nbItems : "21 items",
              couleur : "#ECFFEC",
              image : new URL(Kiwi,import.meta.url).href,
            },
            {
              name : "Red Apple",
              nbItems : "68 items",
              couleur : "#F2FCE4",
              image : new URL(Apple,import.meta.url).href,
            },
            {
              name : "Snack",
              nbItems : "34 items",
              couleur : "#FFF3EB",
              image : new URL(Cereal,import.meta.url).href,
            },
            {
              name : "Black Plum",
              nbItems : "25 items",
              couleur : "#FFF3FF",
              image : new URL(Blueberry,import.meta.url).href,
            },
            {
              name : "Vegetables",
              nbItems : "65 items",
              couleur : "#F2FCE4",
              image : new URL(Letuce,import.meta.url).href,
            },
            {
              name : "Headphone",
              nbItems : "33 items",
              couleur : "#FFFCEB",
              image : new URL(Headphone,import.meta.url).href,
            },
            {
              name : "Cake and Milk",
              nbItems : "26 items",
              couleur : "#F2FCE4",
              image : new URL(Chips,import.meta.url).href,
            },
            {
              name : "Orange",
              nbItems : "63 items",
              couleur : "#FFF3FF",
              image : new URL(Orange,import.meta.url).href,
            },
          ],
          promotion : [
            {
              name : "Everyday Fresh & Clean with Our Products",
              bg : "#F0E8D5",
              image : new URL(Onion,import.meta.url).href,
              TxtButton : "Shop Now",
              ColorButton : "#3BB77E",
            },
            {
              name : "Make your Breakfast Healthy and Easy",
              bg : "#F3E8E8",
              image : new URL(Yogurt,import.meta.url).href,
              TxtButton : "Shop Now",
              ColorButton : "#3BB77E",
            },
            {
              name : "The best Organic Products Online",
              bg : "#E7EAF3",
              image : new URL(Vegetable,import.meta.url).href,
              TxtButton : "Shop Now",
              ColorButton : "#FDC040",
            },
          ],
          products: [
            {
              id: 1,
              tag: "-17%",
              discountBg: "#3BB77E",
              image: "./src/assets/popular-product-icons/mango.png",
              category: 3,
              name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 2,
              tag: "Hot",
              discountBg: "#FD6E6E",
              image: "./src/assets/popular-product-icons/mais.png",
              category: 3,
              name: "All Natural Italian-Style Chicken Meatballs",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 3,
              tag: "Sale",
              discountBg: "#FDC040",
              image: "./src/assets/popular-product-icons/orange.png",
              category: 3,
              name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.51",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 4,
              tag: "",
              discountBg: "",
              image: "./src/assets/popular-product-icons/poivrons.png",
              category: 3,
              name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.51",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 5,
              tag: "",
              discountBg: "",
              image: "./src/assets/popular-product-icons/yellowfruit.png",
              category: 3,
              name: "Blue Diamond Almonds Lightly Salted Vegetables",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 6,
              tag: "",
              discountBg: "",
              image: "./src/assets/popular-product-icons/ham.png",
              category: 3,
              name: "Chobani Complete Vanilla Greek Yogurt",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 7,
              tag: "Sale",
              discountBg: "#FDC040",
              image: "./src/assets/popular-product-icons/fish.png",
              category: 3,
              name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 8,
              tag: "",
              discountBg: "",
              image: "./src/assets/popular-product-icons/beef.png",
              category: 3,
              name: "Encore Seafoods Stuffed Alaskan Salmon",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 9,
              tag: "",
              discountBg: "",
              image: "./src/assets/popular-product-icons/pork.png",
              category: 3,
              name: "Gorton’s Beer Battered Fish Fillets with soft paper",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
            {
              id: 10,
              tag: "Hot",
              discountBg: "#FD6E6E",
              image: "./src/assets/popular-product-icons/navet.png",
              category: 3,
              name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
              rate: 4.0,
              description: "500 gram",
              sellPrice: "2.00",
              discountPercentage: 17,
              discountPrice: "3.00",
            },
        ],
    }),
})