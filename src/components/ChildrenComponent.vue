<template>
  <h1>Children Component is Here</h1>
  <p>{{ fromParent }}</p>
  <button @click="sendData">send data to parent</button>
</template>

<script>
export default {
  name: "ChildrenComponent",

  // data 시작
  data(){
    return {
      fromChild: 'this is Child Data'
    }
  },
  // data 끝
  watch:{
    fromParent(){
      alert('props fromParent is modified');
    }
  },
  //props 시작
  props:{
    fromParent:{
      type: String,
    }
  },
  //props 끝
  //methods 시작
  methods:{
    sendData(){
      // console.log('fromChild', this.fromChild)
      this.$emit('toParent', this.fromChild);
    }
  }
  //methods 끝

}
</script>

<style scoped>

</style>
