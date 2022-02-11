<template>
  <div>
    <a
      :href="'/dishes/' + item.id"
      class="item"
      v-for="item in items"
      :key="item.id"
    >
      <img v-bind:src="'/' + item.path" />
      <div class="ml-1 detail container">
        <h4>{{ item.name }}</h4>
        <p class="description">{{ item.desc }}</p>
        <p class="min-price">Min: {{ item.min_price }} €</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },

  created: function () {
    this.getItem();
  },

  computed: {},
  methods: {
    getItem() {
      let uri = "/restuarants";

      this.axios.get(uri).then((response) => {
        this.items = response.data.data;
      });
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  cursor: pointer;
  margin: 5px 0px 5px 0px;
}

.item img {
  width: 200px;
  min-height: 100px;
}

.detail {
  /*  padding: 5px; */
   display: flex;
 flex-direction: column;
 justify-content: space-around;
 margin-left: 20px;
}

p {
  margin: 0px;
}

.description {
  color: #666;
}

.min-price {
  flex-grow: 1;
  padding-top: 15px;
  color: #666;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
