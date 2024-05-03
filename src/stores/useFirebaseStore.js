import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, onSnapshot,doc,
  deleteDoc,updateDoc,addDoc,
  query, orderBy } from "firebase/firestore";

export const useFirebaseStore = defineStore('firebaseStore', {
  state:()=>{
    return{
      products:[]
    }
  },
  actions:{
    async getProducts(){
      onSnapshot(collection(db,'products'), (querySnapshot) => {
        let datas=[];
        querySnapshot.forEach((doc) => {
            let data = {
              id:doc.id,
              name:doc.data().name,
              description:doc.data().description,
              image:doc.data().image
            }
          datas.push(data)
        })
        this.products=datas
      })
    },

    async addData(item){
      console.log("觸發新增")
      console.log("傳入資料",item)
      let currentDate = new Date().getTime(),
      date = currentDate.toString()

    await addDoc(collection(db,'products'), {
      id:date,
      name:item.name,
      image:item.image,
      description:item.description,
    })
    },

    async deletData(idToDelete) {
      console.log("storeDELETE,id:",idToDelete)
      await deleteDoc(doc(collection(db,'products'), idToDelete));
    },

    async editData(content,id ) {
      console.log("觸發store更新，資料：",content)
      console.log("觸發store更新，id：",id)
      await updateDoc(doc(collection(db,'products'),id), {
        id:content.id,
        name:content.name,
        image:content.image
      });
    }
  }
})
