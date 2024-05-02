<template>
    <div class="text-end mt-3">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">
        增加一個產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="80">id</th>
          <th width="150">姓稱</th>
          <th width="450">描述</th>
          <th width="200">網址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in useFBstore.products" 
        :key="item.id"
        >
          <td>{{ item.id}}</td>
          <td>{{ item.name }}</td>
          <td class="text-right">
            {{ item.description}}
          </td>
          <td class="text-right">
            {{ item.image }}
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="deletDate(item.id)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <ProductModal ref="productModal"
      :product="tempProduct"
      @update-product="updateProduct">
    </ProductModal>
  </template>
  
  <script setup>
  import {ref} from "vue"
  import ProductModal from '../components/Modal.vue'
  import {useFirebaseStore} from '../stores/useFirebaseStore'

  const useFBstore = useFirebaseStore()
  const productModal = ref(null)
  let isNew = ref(false)
  let tempProduct = ref({})

  function openModal(CE, item) {
  console.log("檢查傳入值isNew",CE)
    // console.log("檢查傳入值item",item)
  if (CE === true) {
    console.log("呼叫新增")
    this.tempProduct = {};
  } else {
    console.log("呼叫編輯")
    tempProduct.value = { ...item };
    console.log("顯示tempProduct:",tempProduct.value)
  }
  isNew.value = CE;
  productModal.value.showModal();
}

  function updateProduct(item) {
    console.log("觸發updataProduct")
    console.log("傳入資料：",item)
    console.log("isNew是什麼",isNew.value)
    if(isNew.value == true){
      console.log("觸發更新傳入的值：",item)
      tempProduct.value = item;
      console.log("設定temp為傳入的值",tempProduct)
      // 新增
      useFBstore.addData(item)
    }else{
      // 編輯
        console.log("更新模式")
      useFBstore.editData(item,item.id)
        // editProject(item)

    }
    productModal.value.hideModal();
    // this.getProducts();
        // });
    }
  
  function deletDate(id){
    useFBstore.deletData(id)
  }

  </script>
  