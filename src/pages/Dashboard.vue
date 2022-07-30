<template>   
  <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { PaperTable } from "@/components";
import axios from 'axios'
const tableColumns = ["ID", "title", "작성자", "첨부파일"];
let data = [{ msg: 'hello world' }];
let response
// let tableData = [
//     // {
//     //   번호: 1,
//     //   제목: "Dakota Rice",
//     //   작성자: "$36.738",
//     //   첨부파일: "Niger"
//     // }
//  ];
export default {
  components: {
    PaperTable
  },
  created() {
    console.log("created");
    this.fetchData();
    
  },
  mounted() {
 
  //  console.log("mounted : " + tableData.length)
  },
  computed: {
  
  },
  methods: {
     async fetchData() {    
      console.log("axios 들어왔어요");
      response = await axios.get('/notice')
      this.$data.table1.data.push(response.data.data[0]);
      //tableData.push(response.data.data[0]);
      //data1.push(response.data.data[0]);
      //console.log(response)
      console.log(this.$data.table1.data)
  
      //Vue.set(tableData, 0 , response.data.data[0]);
   //   console.log(tableData)

     //   console.log("created : " + tableData.length)
   },
  },
  data() {
    return {
      table1: {
        title: "공지사항",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: []
      },
    };
  }
};
</script>