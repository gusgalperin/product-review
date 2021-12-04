<template>
  <div>
    <b-row>
      <b-alert v-model="showSuccessAlert" variant="success" dismissible>
        {{ alertMessage }}
      </b-alert>
    </b-row>

    <b-row>
      <product-overview
        :totalProducts="numberOfProducts"
        :activeProducts="numberOfActiveProducts"
        @totalProductsIsActive="setFilterTotalIsActive"
        @activeProductsIsActive="setFilterActiveIsActive"
      ></product-overview>
    </b-row>

    <b-row class="mt-3">
      <b-card>
        <b-row align-h="between">
          <b-col cols="6">
            <h3>{{ tableHeader }}</h3>
          </b-col>
          <b-col cols="2">
            <b-row>
              <b-col>
                <b-button
                  variant="primary"
                  id="show-btn"
                  @click="showCreateModal"
                >
                  <b-icon-plus class="text-white"></b-icon-plus>
                  <span class="h6 text-white">Nuevo Producto</span>

                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-table
            striped
            hover
            :items="items"
            :fields="fields"
            class="text-center"
          >
            <template #cell(category)="data">
              {{ data.item.category }}
            </template>
            <template #cell(name)="data">
              {{ data.item.name }}
            </template>
            <template #cell(brand)="data">
              {{ data.item.brand }}
            </template>
            <template #cell(stars)="data">
              <read-only-stars :stars="data.item.stars" :starsCount="data.item.ratesCount"></read-only-stars>
            </template>
            <template #cell(status)="data">
              <b-icon-bookmark-check-fill
                variant="success"
                v-if="data.item.active === true"
              ></b-icon-bookmark-check-fill>
              <b-icon-bookmark-x-fill
                variant="danger"
                v-else
              ></b-icon-bookmark-x-fill>
            </template>
            <template #cell(acciones)="data">
              <b-row>
                <b-col cols="3">
                  <b-icon-box-arrow-in-right
                      class="action-item"
                      variant="primary"
                      @click="productDetail(data.item.id)"
                  ></b-icon-box-arrow-in-right>
                </b-col>
                <b-col cols="3" v-if="data.item.active === true">
                  <b-icon-pencil-square
                    class="action-item"
                    variant="primary"
                    @click="getRowData(data.item.id)"
                  ></b-icon-pencil-square>
                </b-col>
                <b-col cols="3" v-if="data.item.active === true">
                  <b-icon-cart-plus-fill
                      class="action-item"
                      variant="primary"
                      @click="addReview(data.item.id)"
                  ></b-icon-cart-plus-fill>
                </b-col>
                <b-col cols="3" v-if="data.item.active === true">
                  <b-icon-trash-fill
                      class="action-item"
                      variant="danger"
                      @click="showDeleteModal(data.item.id)"
                  ></b-icon-trash-fill>
                </b-col>
              </b-row>
            </template>
          </b-table>
        </b-row>
      </b-card>
    </b-row>

<!--Modal for adding new Products-->
    <b-modal
      ref="create-product-modal"
      size="xl"
      hide-footer
      title="Nuevo Producto"
    >
      <create-product-form
        @closeCreateModal="closeCreateModal"
        @showSuccessAlert="showAlertCreate"
        @reloadDataTable="reloadDataTable"
      ></create-product-form>
    </b-modal>

<!--Modal for updating Product-->
    <b-modal
      ref="edit-product-modal"
      size="xl"
      hide-footer
      title="Editar Producto"
    >
      <edit-product-form
        @closeEditModal="closeEditModal"
        @showSuccessAlert="showAlertUpdate"
        @reloadDataTable="reloadDataTable"
        :productId="productId"
      ></edit-product-form>
    </b-modal>

<!--Delete Product Modal-->

    <b-modal
      ref="delete-product-modal"
      size="md"
      hide-footer
      title="Confimar eliminado"
    >
      <delete-product-modal
        @closeDeleteModal="closeDeleteModal"
        @showDeleteAlert="showDeleteSuccessModal"
        @reloadDataTable="reloadDataTable"
        :productId="productId"
      ></delete-product-modal>
    </b-modal>

  </div>
</template>

<script>
  import ProductOverview from "@/components/ProductOverview.vue"
  import CreateProductForm from "@/components/CreateProductForm.vue"
  import EditProductForm from "@/components/EditProductForm.vue"
  import DeleteProductModal from "@/components/DeleteProductModal.vue"
  import ReadOnlyStars from "./ReadOnlyStars";

  import { mapGetters, mapActions } from 'vuex'

  export default {
    components:{
      ProductOverview,
      CreateProductForm,
      EditProductForm,
      DeleteProductModal,
      ReadOnlyStars
    },
    data() {
      return {
        fields:[
          {
            key:"category",
            label:"Categoria",
            sortable: false
          },
          {
            key:"name",
            label:"Nombre",
            sortable: false
          },
          {
            key:"brand",
            label:"Marca",
            sortable: false
          },
          {
            key:"stars",
            label:"Rating",
            sortable: false
          },
          {
            key:"status",
            label:"Status",
            sortable: false
          },
          "acciones",
        ],
        items: [],
        productId: 0,
        nameSearchTerm: "",
        tableHeader: "",
        showSuccessAlert: false,
        alertMessage: ""
      }
    },
    async mounted() {
      await this.fetchProducts()
      this.setFilterTotalIsActive()
    },
    computed: {
      ...mapGetters({
        products: 'products/products',
        numberOfProducts: 'products/numberOfProducts',
        activeProducts: 'products/activeProducts',
        numberOfActiveProducts: 'products/numberOfActiveProducts'
      })
    },
    methods:{
      ...mapActions({
        fetchProducts: 'products/fetchProducts'
      }),
      async reloadDataTable() {
        await this.fetchProducts()
        this.setFilterTotalIsActive()
      },
      showCreateModal(){
        console.log(this.$refs)
        this.$refs["create-product-modal"].show()
      },
      closeCreateModal(){
        this.$refs["create-product-modal"].hide()
      },
      getRowData(id) {
        this.$refs["edit-product-modal"].show()
        this.productId = id
      },
      closeEditModal() {
        this.$refs["edit-product-modal"].hide()
      },
      setFilterTotalIsActive() {
        this.tableHeader = "Todos los Productos"
        console.log('showing all products')
        this.items = this.products
      },
      setFilterActiveIsActive() {
        this.tableHeader = "Productos activos"
        this.items = this.activeProducts
      },
      showAlertCreate() {
        this.showSuccessAlert = true
        this.alertMessage = "El producto fue creado correctamente"
      },
      showAlertUpdate() {
        this.showSuccessAlert = true
        this.alertMessage = "El producto fue actualizado"
      },
      showDeleteModal(id) {
        this.$refs["delete-product-modal"].show()
        this.productId = id
      },
      closeDeleteModal() {
        this.$refs["delete-product-modal"].hide()
      },
      showDeleteSuccessModal() {
        this.showSuccessAlert = true
        this.alertMessage = "Producto eliminado"
      },
      addReview(id) {
        this.$router.push({name: 'Review', params: {productId: id}})
      },
      productDetail(id) {
        this.$router.push({name: 'Detail', params: {productId: id}})
      }
    },
    name: "DataTable"
  }
</script>

<style scoped>
  .action-item:hover {
    cursor: pointer;
  }
</style>