<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div class="panel panel-success">
          <div class="panel-heading">
              <h3 class="panel-title">{{this.stock.name}}
                  <small>(Price : {{this.stock.price}})</small>
              </h3>
          </div>
          <div class="panel-body">
              <div class="pull-left">
                  <input type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                  >
              </div>
              <div class="pull-right">
                  <button class="btn btn-success"
                   @click="buyStock" 
                   :disabled=" quantity <= 0 || Number.isInteger(quantity)">
                   Buy</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['stock'],
  data(){
        return{
            quantity:0
        }
    },
  methods:{
      buyStock() {
          const order ={
              id: this.stock.id,
              stockPrice : this.stock.price,
              stockName : this.stock.name
          }
          console.log(order);
          this.quantity = 0
      }
  }
}
</script>
