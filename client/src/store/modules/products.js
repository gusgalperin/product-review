import axios from 'axios'

const uri = 'http://localhost:8010/api/products/'

const state = {
    products: [],
    topProducts: []
}

const getters = {
    products: state => state.products,
    topProducts: state => state.topProducts,
    numberOfProducts(state) {
        return state.products.length
    },
    activeProducts:(state) => {
        return state.products.filter((p) => {
            return p.active === true
        })
    },
    numberOfActiveProducts:(state) => {
        const activeProducts = state.products.filter((p) => {
            return p.active === true
        })
        return activeProducts.length
    },
    productById: (state) => (id) => {
        console.log('productById ' + id)
        return state.products.filter((p) => p.id == id)[0]
    }
}

const actions = {
    async fetchProducts({ commit }){
        console.log('fetching products..')
        this.products = []
        const response = await axios.get(uri)
        console.log('found ' + response.data.length + ' products')
        commit('setProducts', response.data)
    },
    async fetchTopProducts({commit}){
        const response = await axios.get(`${uri}chart/top`)
        commit('setTopProducts', response.data)
    },
    async addProduct({ commit }, product){
        const response = await axios.post(uri, product)
    },
    async updateProduct({ commit }, product){
        console.log('update product..' + product)
        await axios.put(`${uri}${product.id}`, product)
    },
    async deleteProduct({ commit }, id){
        await axios.delete(`${uri}${id}`)
    },
    async addReview({commit}, review){
        await axios.post(`${uri}${review.productId}/review`, review)
    }
}

const mutations = {
    setProducts: (state, products) => state.products = products,
    setTopProducts: (state, products) => state.topProducts = products
}

export default {
    namespaced: true,
    state, getters, actions, mutations
}