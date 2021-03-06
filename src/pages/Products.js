import { css } from 'https://unpkg.com/goober/dist/goober.module.js'
import Product from './Product.js'

const styles = css `
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default {
  name: 'Products',
  components: {
    Product
  },
  template: `
    <main>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <Product :product="product" />
        </li>
      </ul>
    </main>
  `,
  styles,
  computed: {
    products() {
      return this.$store.getters.products 
    }
  }
}