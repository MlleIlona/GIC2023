<template>
    <div class="_wrap">
        <div class="featured-categories">
            <div> {{ name }}</div>
        </div>
        <div class="_category">
            <a v-for="g in category" href="">{{ g }}</a>
        </div>
    </div>

</template>



<script>
import { productStore } from '../store/product';

import { mapState } from "pinia";

export default {
    name: "Menu",
    props: {
        name : String,
        category: Array,
    },
    setup() {
        const store = productStore();
        return { productStore }
    },
    computed: {
        ...mapState(productStore,["menu"])
    }
}


</script>



<style scoped>

.featured-categories {
  font-family: "Quicksand", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.013px;
}
._wrap {
  width: 1590px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
._category {
  
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
._category a{
  margin-left: 20px;
  text-decoration: none;
  color: #253D4E;
}

</style>