<template>
    <div class="_prod">
        <div class="_discount" :style="{background: discountBg}">
            {{ discountTxt }}
        </div>
        <div class="_img">
            <img :src=image alt="">
        </div>
        <div class="_info">
            <div class="_hodo">
                Hodo Foods
            </div>
            <div class="_txt">
                {{ nameProduct }}
            </div>
            <div class="_rate">
                <span v-for="i in 5">
                    <img src="../assets/product-icons/yellowstar.svg" alt="" v-if="i<=rate"/>
                    <img src="../assets/product-icons/greystar.svg" alt="" v-else/>
                </span>
                <span class="_notation"> ({{ rate }})</span>
            </div>
            <div class="_weight">
                {{ description }}
            </div>
            <div class="_price">
                <div class="_priceDis">
                    <span> ${{ price }}</span>
                    <del class="_del"> ${{ discountPrice }}</del>
                </div>
            </div>
        </div>
    </div>


</template>



<script>
import { productStore } from '../store/product';
import MyButton from './MyButton.vue';


export default {
    name: "Product",
    setup() {
        const store = productStore();
        return { productStore }
    },
    props  : ["description", "discountTxt", "discountBg","image","nameProduct", "rate","price", "discountPrice"],
    components: {
        MyButton,
    }
};


</script>



<style scoped>

._discount {
  /* padding: 10px 15px; */
  width: 58px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: 0;
  top: 20px;
  border-radius: 0px 30px 30px 0px;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
}

._priceDis {
  color: var(--NestMart-Brand-1, #3bb77e);
  font-family: Quicksand;
  font-size: 20px;
  font-style: normal;
}
._prod {
    width: 290px;
    height: 400px;
    border-radius: 10px;
    border: 1px solid #bce3c9;
    background: #fff;
    position: relative;
    
}
._prod:hover{
  transform: scale(90%);
}

._txt {
    color: var(--NestMart-TextHeading, #253d4e);
    font-family: Quicksand;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
}
._img {
    position: absolute;
    height: 167.384px;
    flex-shrink: 0; 
    top: 60px;
    left: 50%;
    translate: -50% 0;
    mix-blend-mode: multiply;
}

._hodo {
  color: var(--NestMart-TextBody, #7e7e7e);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
}

._rate {
  font-family: Lato;
  font-size: 14px;
}

._rate img {
    margin-right : 5px;
}

._weight {
  color: var(--NestMart-TextBody, #7e7e7e);
  font-family: Lato;
  font-size: 12px;
}

._price {
  width: 260px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
._del {
  color: var(--NestMart-TextBody, #7e7e7e);
  font-family: Quicksand;
  font-size: 12px;
  margin-left: 5px;
}

._info {
  width: 261px;
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 0;
  padding-bottom: 20px;
}
._info > div {
    margin-top: 3px;
}

_notation {
    color: var(--NestMart-TextBody, #7E7E7E);

    /* NestMart/ Text xs */
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
}
</style>