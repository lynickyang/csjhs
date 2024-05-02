import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, query, where, onSnapshot } from "firebase/firestore";

export const useFirebaseStore = defineStore('firebaseStore', {
  state:()=>{
    return{
      products:[]
    }
  },
  actions:{
    getProeucts(){
      // console.log("store getProejcts")
      let products =[]
      onSnapshot(collection(db,'products'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let product = {
              id:doc.data().id,
              name:doc.data().name,
              description:doc.data().description,
              image:doc.data().id.image
            }
          products.push(product)
        })
        this.products=products
        console.log("取得的資料",this.products)
      });
    }
  }
})
