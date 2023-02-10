<template>
  <div>
    <input @input="newTodo = $event.target.value" :value="newTodo">
    <button @click="add">추가</button>
    <br><br>
    <div v-for="(todo, idx) in todos" :key="idx">
      <input type="checkbox" v-model="chkList" :value="idx">
      :: {{todo.item}} ::
      <button @click="modify(idx)">수정</button>
      <button @click="drop(idx)">삭제</button>
    </div>
    <br>
    <button @click="chkDelete">선택삭제</button>
    <br><br>
    <div v-if="isModifyMod">
      <input @input="modifyTargetItem.item = $event.target.value" :value="modifyTargetItem.item"> <button @click="modifyConfirm(modifyTargetItem.id)">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoMain",

  //data 시작
  data(){
    return {
      isModifyMod: false,
      newTodo: '',
      modifyTargetItem: {},
      chkList: [],
      todos:[
        {
          id: 3,
          item: "vue 공부하기 2"
        },
        {
          id: 4,
          item: "vue 공부하기 3"
        },
        {
          id: 5,
          item: "vue 공부하기 4"
        },
        {
          id: 6,
          item: "vue 공부하기 5"
        },
      ]
    }
  },
  //data 시작

  //methods 시작
  methods:{
    drop(idx){
        this.todos.splice(idx,1);
    },
    add(){
      this.todos.push({
        id: ((this.todos[this.todos.length -1]?.id) + 1) || 1,
        item: this.newTodo
      });
    },
    modify(idx){
      this.modifyTargetItem = {
        id : this.todos[idx].id,
        item : this.todos[idx].item
      }
      this.isModifyMod = true;
    },
    modifyConfirm(id){
      let find = this.todos.find(todo => todo.id === id);
      find.item = this.modifyTargetItem.item;
      this.isModifyMod = false;
    },
    chkDelete(){
      this.chkList.forEach(idx => this.drop(idx));
      this.chkList = [];
    }
  }
  //methods 끝




}
</script>

<style scoped>

</style>
