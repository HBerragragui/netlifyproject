import { defineStore } from 'pinia';
import fakeData from "../mock/data.json"

export const useStore = defineStore('store', {
  
    state: () => ({
    count: 0,
    data : fakeData.data,
    dataDetail : null,
    favorisList: []
  }),

  getters: {
    getDataById: (state) => {
      return (dataId) => state.data.find((data) => data.id === dataId)
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement(){
        this.count--;
    },
    getFilterData(id){
        this.dataDetail = this.data.find(d => d.id == id)
        return this.data.find(d => d.id == id)
       
    },
    sendToFavoris(plant){
      this.favorisList.push(plant)
      
    },
    
    removeToFavoris(plant){
      const objWithIdIndex = this.favorisList.findIndex((obj) => obj.id === plant.id);
      this.favorisList.splice(objWithIdIndex, 1);

      return this.favorisList;

    }
    
  },


});