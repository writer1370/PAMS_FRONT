<template>
  <div class="hello">
    <p>
      axios test
    </p>
    <button @click="getMember">member</button>
    <button @click="getAll">all</button>
 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    const datas = []
    return datas;
  },
  methods: {
    getAll: function(){
      axios({
        method: 'get',
        url: '/all'
      })
      .then(response => {
        console.log(response.data);
      }); 
    },   
    getMember: function(){
      axios({
        method: 'get',
        url: '/member',
        params : {
          seq:'1'
        }
      })
      .then(response => {
        console.log(response.data.data[0].NAME)
        this.datas = response.data;
      }); 
    }
  },
}
</script>
