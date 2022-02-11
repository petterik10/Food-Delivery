
<template>
  <div class="view">
    <div class="list">
      <div class="header">
        <img alt="delicious dish" v-bind:src="'/' + restuarant.path" />
        <h4>{{restuarant.name}}</h4>
        <p>{{restuarant.desc}}</p>
        <p>Min: {{restuarant.min_price}} €</p>
      </div>

      <div>
        <div class="item" v-for="item in items" :key="item.id" v-on:click="addItemToCart(item)">
          <div class="detail">
            <h4 class="name">{{item.name}}</h4>
            <p>{{item.desc}}</p>
            <p class="price">{{item.price}} €</p>
          </div>
          <img alt="delicious food" src="/rest1.jpg" />
          <button class="plus">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              role="presentation"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M12 6a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 011-1z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <Cart v-bind:min_price="restuarant.min_price" />
  </div>
</template>
<script>
import Cart from "../components/Cart";
export default {
  components: {
    Cart
  },
  data() {
    return {
      restuarant: {
        id: "",
        name: "",
        desc: "",
        img: ""
      },
      items: []
    };
  },

  created: function() {
    this.getResturant(this.$route.params.id);
    this.getItems(this.$route.params.id);
  },

  computed: {},
  methods: {
    getItems(resturant_id) {
      let uri = "/dishes/" + resturant_id;
      this.axios.get(uri).then(response => {
        console.log("response", response);
        this.items = response.data.data;
      });
    },
    getResturant(resturant_id) {
      let uri = "/restuarants/" + resturant_id;
      this.axios.get(uri).then(response => {
        console.log("response", response);
        this.restuarant = response.data.data;
      });
    },
    addItemToCart(item) {
      this.$root.$emit("addItemToCart", item);
    },

    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.carts.length; i++) {
        sum += this.carts[i].count * this.carts[i].unit;
      }

      this.carts_total = sum;
    }
  }
};
</script>

<style scoped>
.view {
  display: flex;
  flex-direction: row;
}

.list {
  flex: 1;
}

.checkout {
  border: 1px solid gray;
  padding: 5px;
  width: 300px;
}

.header img {
  width: 100%;
  height: 120px;
}

.item {
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  margin-top: 5px;
  padding: 0px 0px 10px 10px;
  cursor: pointer;
}
.item img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

p {
  margin: 0px;
}

.detail {
  flex: 1;
}

.detail .name {
  margin-top: 10px;
}

.item button {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}

.price {
  color: #fb6100;
  padding-top: 20px;
}

.plus {
  background-color: white; 
  border: 1px solid gray;
  color: gray;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  cursor: pointer;
  font-size: 1rem;
}

svg {
  fill: #125fca;
  font-size: 24px;
}
</style>