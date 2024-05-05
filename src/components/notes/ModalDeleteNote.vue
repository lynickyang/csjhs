
<template>
  <div class="modal is-active p-2">
    <div class="modal-background theme-light"></div>
    <div
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click="closeModal"
          class="delete"
          aria-label="close"
        >
        </button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          class="button"
        >
          Cancel
        </button>
        <button
        
          @click="deletecomfirm(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>


<!-- <div ref="modalCardRef" class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">注意</h5>
        <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定要刪除留言嗎？</p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="closeModal" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" @click="storeNotes.deleteNote(noteId)" class="btn btn-danger">刪除</button>
      </div>
    </div>
  </div>
</div> -->


  
  <script setup>
  
  /*
    imports
  */
  
    import { ref, onMounted, onUnmounted } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { useStoreNotes } from '@/stores/storeNotes'
  
  /*
    props
  */
  
    const props = defineProps({
      modelValue: {
        type: Boolean,
        default: false
      },
      noteId: {
        type: String,
        required: true
      }
    })
  

    const deletecomfirm =(noteId)=>{
      closeModal();
      storeNotes.deleteNote(noteId);
    }
  /*
    emits
  */
  
    const emit = defineEmits(['update:modelValue'])
  
  /*
    store
  */
  
    const storeNotes = useStoreNotes()
  
  /*
    close modal
  */
  
    const closeModal = () => {
      emit('update:modelValue', false)
    }
  
  /*
    click outside to close
  */
  
    const modalCardRef = ref(null)
  
    onClickOutside(modalCardRef, closeModal)
  
  /*
    keyboard control
  */
  
    const handleKeyboard = e => {
      if (e.key === 'Escape') closeModal()
    }
  
    onMounted(() => {
      document.addEventListener('keyup', handleKeyboard)
    })
    onUnmounted(() => {
      document.removeEventListener('keyup', handleKeyboard)
    })
  
  </script>