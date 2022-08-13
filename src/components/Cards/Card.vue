<template>
  <div class="card">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-header" v-if="$slots.header || title">
      <slot name="header">
        <h4 class="card-title">{{title}}</h4>
        <div class="card-category" v-if="subTitle">
          {{subTitle}}
          <span class="ti-plus icon-container" v-on:click="모달창열렸니 = false"></span>
        </div>
      </slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="raw-content"></slot>
    <div class="card-footer" v-if="$slots.footer">
    
      <hr>
      <slot name="footer"></slot>
    </div>
     <div class="black-bg" v-if="모달창열렸니 == false">
       <div class="white-bg">
        <h4>상세페이지</h4>
         <div>
            <form @submit.prevent>
                <div class="row">
              
                  <div class="col-md-3">

                    <fg-input type="text"
                              label="Username"
                              placeholder="Username"
                              v-model="user.username">
                    </fg-input>
                  </div>
             
                </div>
                
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>About Me</label>
                      <textarea rows="5" class="form-control border-input"
                                placeholder="Here can be your description"
                                v-model="user.aboutMe">

                      </textarea>
                    </div>
                  </div>
                </div>
            </form>
         </div>
         <button @click="insertNotice">저장</button>
        <button @click="모달창열렸니 = true">닫기</button>
      </div> 
    </div>


    
  </div>
</template>
<script>
import Button from '../Button.vue';
export default {
  components: { Button },
  name: "card",
  data() {
    return {
      모달창열렸니 : true,
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    }
  },
  methods: {

  },
  props: {
    title: String,
    subTitle: String
  },
  methods: {
    test() {
      console.log("추가");
    }
  }
};
</script>
<style>
.black-bg {
  height: 80vh;
  width:calc(100% - 330px);
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
