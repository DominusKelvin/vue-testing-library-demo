import { render, fireEvent } from '@testing-library/vue'
import CheckOut from '@/components/CheckOut.vue'

const product = {
    name: 'Korg Kronos',
    price: 1200
}
describe('Checkout.vue', () => {
    it('renders product name', () => {
        const { getByText } = render(CheckOut, {
            props: { product }
        })

        getByText(product.name)
    })

    it('renders product price', () => {
        const { getByText } = render(CheckOut, {
            props: { product }
        })

        getByText("$" + product.price)
    })
    it('renders initial quantity as 1', () => {
        const { getByDisplayValue, getByText } = render(CheckOut, {
            props: { product }
        })
        getByDisplayValue(1)
    })
    it('increments product quantity', async () => {
        const { getByDisplayValue, getByText } = render(CheckOut, {
            props: { product }
        })
        const incrementQuantityButton = getByText('+')
        await fireEvent.click(incrementQuantityButton)
        getByDisplayValue(2)
    })
    it('does not decrement quantity when quanty is 1', async () => {
        const { getByDisplayValue, getByText } = render(CheckOut, {
            props: { product }
        })
        const decrementQuantityButton = getByText('-')
        await fireEvent.click(decrementQuantityButton)
        getByDisplayValue(1)
    })
    it('decrement quantity when quantity greater than 1', async () => {
        const { getByDisplayValue, getByText } = render(CheckOut, {
            props: { product }
        })
        const incrementQuantityButton = getByText('+')
        const decrementQuantityButton = getByText('-')
        await fireEvent.click(incrementQuantityButton)
        await fireEvent.click(decrementQuantityButton)
        getByDisplayValue(1)
    })

    it('displays correct final price when increment button is clicked', async () => {
        const {  getByText, getByTestId } = render(CheckOut, {
            props: { product }
        })
        const incrementQuantityButton = getByText('+')
        await fireEvent.click(incrementQuantityButton)
        getByText(product.price * 2)
    })
    it('displays correct final price when decrement button is clicked', async () => {
        const {  getByText} = render(CheckOut, {
            props: { product }
        })
        const incrementQuantityButton = getByText('+')
        const decrementQuantityButton = getByText('-')
        await fireEvent.click(incrementQuantityButton)
        await fireEvent.click(decrementQuantityButton)
        getByText(product.price)
    })
})
