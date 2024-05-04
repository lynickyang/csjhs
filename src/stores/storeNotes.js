import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, onSnapshot,doc,
   deleteDoc,updateDoc,addDoc,
   query, orderBy} from 'firebase/firestore';
   
const notesCollectionRef = collection(db,'notes')
const notesCollectionQueryRef = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
      ]
    }
  },
  actions: {
    async getNotes(){
      onSnapshot(notesCollectionQueryRef, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note={
            id:doc.id,
            content:doc.data().content,
            date:doc.data().date
            } 
          notes.push(note)
        })
        this.notes=notes
      })
    },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          date = currentDate.toString()

      await addDoc(notesCollectionRef, {
        content:newNoteContent,
        date
      });

    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },

    async updateNote(id, content) {
      await updateDoc(doc(notesCollectionRef,id), {
        content
      });
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})