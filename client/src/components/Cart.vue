<template>
  <div class="cart">
    <h2>Warenkorb</h2>
    <hr />
    <div class="item1" v-for="item in carts" :key="item.id">
      <span class="count">{{ item.count }}</span>
      <span class="item-name">{{ item.name }}</span>
      <span>{{ item.unit * item.count }} €</span>
    </div>
    <div class="item1">
      <span class="item-name">Gesamt</span>
      <span>{{ carts_total }} €</span>
    </div>

    <button class="submit" :disabled="carts_total < min_price">
      Bezahlen {{ carts_total }} €
    </button>
  </div>
</template>
<script>
// import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  props: ["min_price"],
  data() {
    return {
      carts: [],
      carts_total: 0,
    };
  },

  created: function () {},

  computed: {},
  mounted() {
    this.$root.$on("addItemToCart", (item) => {
      this.addItemToCart(item);
    });
  },
  methods: {
    addItemToCart(item) {
      let exist = false;
      for (let i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id == item.id) {
          this.carts[i].count++;
          exist = true;
        }
      }

      if (exist == false) {
        this.carts.push({
          id: item.id,
          name: item.name,
          count: 1,
          unit: item.price,
        });
      }

      this.totalPrice();
    },

    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.carts.length; i++) {
        sum += this.carts[i].count * this.carts[i].unit;
      }

      this.carts_total = sum;
    },
  },
};
</script>

<style scoped>
.cart {
  border: 1px solid gray;
  padding: 5px;
  width: 300px;
}

p {
  margin: 0px;
}

.item1 {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding: 5px 0px 5px 0px;
}

.count {
  width: 30px;
}
.item-name {
  flex: 1;
}

.cart h2 {
  text-align: center;
}
.cart button {
  margin-top: 40px;
  width: 100%;
}

.submit {
  background-color: #125fca;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.submit:disabled {
  background-color: lightgray;
}
</style>
