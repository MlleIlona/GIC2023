<template>

  <div class="wrap">
    <Menu name="Featured Categories" :category="groups" class="_menu"></Menu>
    <div class="_font">
      <div style="display: flex;">
        <div v-for="catego in categories" class="_fruit">
          <Category :color=catego.couleur :picture=catego.image :text1=catego.name :text2=catego.nbItems></Category>
        </div>
      </div>

      <div style="display: flex;">
        <div v-for="promo in promotion">
          <Promotion :text="promo.name" :img="promo.image" :color="promo.bg" :CButton="promo.ColorButton" :TButton="promo.TxtButton"></Promotion>
        </div>
      </div>

      <Menu name="Popular Products" :category="groups" style="margin-top: 50px;"></Menu>

      <div class="Product" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
        <div style="display: flex;">
          <div v-for="prod in products">
            <Product 
            :discountTxt="prod.tag"
            :price="prod.sellPrice"
            :discountBg="prod.discountBg"
            :rate="prod.rate"
            :nameProduct="prod.name" 
            :image="prod.image" 
            :description="prod.description" 
            :discountPrice="prod.discountPrice"></Product>
          </div> 
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import { productStore } from '@/store/product';
import { mapState } from 'pinia';

import Category from "./components/Category.vue";
import MyButton from "./components/MyButton.vue";
import Promotion from "./components/Promotion.vue";
import Product from "./components/Product.vue"
import Menu from "./components/Menu.vue"


export default {
  name: "App",
  components: {
    MyButton,
    Promotion,
    Category,
    Menu,
    Product,
  },
  computed: {
    ...mapState(productStore, ["categories"]),
    ...mapState(productStore, ["promotion"]),
    ...mapState(productStore, ["menu"]),
    ...mapState(productStore, ["products"]),
  }
};
</script>


<style scoped>
._fruit {
  display: flex;
  margin-right: 25px;
}

.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

._menu {
  margin-top: 50px;
}

._font {
  margin: auto;
  width: 1590px;
}

</style>