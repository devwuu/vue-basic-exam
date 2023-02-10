<template>

  <div>
    <h1>Test Component Is Here</h1>
    <template v-if="isShow">
      <p v-for="(item, idx) in arrays" :key="idx">
        {{ item }}
      </p>
    </template>
    <button @click="btnClick"> Click Here </button>

    <br><br><br><br>

    <input readonly :value="forInputText">
    <br>
    <input v-model="forInputText">
    <br><br><br>
    {{ concatStr }}
    <br><br><br>
    <p> children data : {{childData}}</p>
    <br>
    <children-component
        :from-parent="parentData"
        @toParent="takeChildrenData"
    ></children-component>


  </div>
</template>

<script>
import ChildrenComponent from "@/components/ChildrenComponent.vue";

export default {
  name: "TestComponent",

  components:{
    ChildrenComponent,
  },
  //lifecycle 시작
  beforeCreate() {
    console.log("before created")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("before mount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUnmount() {
    console.log("before mounted")
  },
  unmounted() {
    console.log("unmounted")
  },
  beforeUpdate() {
    console.log("before updated")
  },
  updated() {
    console.log("updated")
  },
  //lifecycle 끝
  //data 시작
  data(){
    return {
      arrays: ['아침', '점심', '저녁', '간식', '후식', '애피타이저'],
      isShow: false,
      parentData: 'this is parent data',
      childData: 'blank',
      forInputText: 'hi input text',
      str1: 'str1 is here',
      str2: 'str2 is here',
    }
  },
  //data 끝
  computed:{
    concatStr(){
      return `${this.str1}, ${this.str2}`;
    }
  },
  //watch 시작
  watch:{
    childData(newval, oldval){
      alert(`childData is modified ${oldval} to ${newval}`);
    }
  },
  //watch 끝
  // methods 시작
  methods:{
    btnClick(){
      this.isShow = !this.isShow;
    },
    takeChildrenData(childData){
      // console.log('child',childData)
      this.childData = childData;
    }
  }
  // methods 끝
}
</script>

<style scoped>

</style>
