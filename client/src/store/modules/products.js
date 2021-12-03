import axios from 'axios'

const uri = 'http://localhost:8010/api/products/'

const state = {
    products: []
}

const getters = {
    products: state => state.products,
    numberOfProducts(state) {
        return state.products.length
    },
    activeProducts(state) {
        return state.products.filter((p) => {
            return p.active === true
        })
    },
    numberOfActiveProducts(state){
        const activeProducts = state.products.filter((p) => {
            return p.active === true
        })
        return activeProducts.length
    }
}

const actions = {
    async fetchProducts({ commit }){
        const response = await axios.get(uri)
        commit('setProducts', response.data)
    },
    async addProduct({ commit }, product){
        const response = await axios.post(uri, product)
        await this.fetchProducts({ commit })
    },
    async updateProduct({ commit }, product){
        await axios.put(`${uri}${product.id}`)
        await this.fetchProducts({ commit })
    },
    async deleteProduct({ commit }, id){
        await axios.delete(`${uri}${id}`)
        await this.fetchProducts({ commit })
    }
}

const mutations = {
    setProducts: (state, products) => state.products = products
}

export default {
    namespaced: true,
    state, getters, actions, mutations
}