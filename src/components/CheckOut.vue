<template>
    <div class="checkout">
        <h1>{{ product.name }} </h1>
        <p>${{ product.price }}</p>
        <div class="quantity-wrapper">
            <div>
                <label for="quanity">Quantity</label>
                <input type="number" v-model="quantity" name="quantity" class="quantity-input" />
            </div>
           <div>
                <button @click="incrementQuantity" class="quantity-btn">+</button>
                <button @click="decrementQuantity" class="quantity-btn">-</button>
           </div>
        </div>
          <p>final price - $<span>{{ finalPrice }}</span></p>
        <button @click="checkout" class="checkout-btn">Checkout</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            quantity: 1,
        }
    },
    props: {
    product: {
        required: true
        }
    },
    computed: {
        finalPrice() {
            return this.product.price * this.quantity
        }
    },
    methods: {
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity == 1) return;
            this.quantity--;
        },
        checkout() {

        }
    }
}
</script>

<style scoped>
.quantity-wrapper {
    margin: 2em auto;
    width: 50%;
    display: flex;
    justify-content: center;
}

.quantity-wrapper div {
    margin-right: 2em;
}
.quantity-input {
    margin-left: 0.5em;
}
.quantity-wrapper button {
    margin-right: 1em;
}
button {
    cursor: pointer;
}
</style>
