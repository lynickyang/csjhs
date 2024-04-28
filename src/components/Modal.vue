<script setup>
import * as bootstrap from 'bootstrap'
import {onMounted, reactive,ref} from "vue";
import { useDataStore } from "@/stores/useDataStore";
const sotreDatas= useDataStore();

const modal = ref(null);
const myModal = ref(null);

const myModal_show = () => {
  myModal.value.show();
};

const myModal_hide = () => {
  myModal.value.hide();
};

onMounted(() => {
  myModal.value = new bootstrap.Modal(modal.value);
});


const form= reactive({
  id:sotreDatas.ItemData?.id,
  name:sotreDatas.ItemData?.name,
  description:sotreDatas.ItemData?.description,
  image:sotreDatas.ItemData?.image,
});

function cleanUpForm() {
  form.name = null;
  form.description = null;
  form.image = null;
}

function cancelForm() {
  cleanUpForm();
}

function saveItem() {
  console.log("觸發saveItem")
  const data = {
    id: form.id || Number(Date.now()),
    name: form.name,
    description: form.description,
    image: form.image,
  };
  console.log("data",data);
  sotreDatas.pushItemJosn(data);
  cleanUpForm();
  myModal_hide();
}

</script>

<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">新增</h1>
          <button
          @click="myModal_hide"
            type="button"
            class="btn-close"
          ></button>
        </div>

        <div class="modal-body">
          <form>
            <input type="hidden" name="id" v-model="form.id" />

            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="name"
                placeholder="照片網址"
                v-model="form.name"
              ></input>
              <label for="name">名稱</label>
            </div>

            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
              <label for="floatingTextarea2">描述</label>
            </div>

            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="image"
                placeholder="照片網址"
                v-model="form.image"
              ></input>
              <label for="image">照片網址</label>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            @click="myModal_hide"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>

          <button type="submit" @click="saveItem" class="btn btn-primary">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>
