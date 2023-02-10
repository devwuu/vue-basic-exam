<template>
  <div>
    <input @input="newTodo = $event.target.value" :value="newTodo" />
    <button @click="add">추가</button>
    <br /><br />

    <todo-item
      v-for="(todo, idx) in todos"
      :key="idx"
      :todo="todo"
      @checked="checked"
      @modifyItem="modify"
      @dropItem="drop"
    ></todo-item>

    <br />
    <button @click="chkDelete">선택삭제</button>
    <br /><br />
    <div v-if="isModifyMod">
      <input
        @input="modifyTargetItem.item = $event.target.value"
        :value="modifyTargetItem.item"
      />
      <button @click="modifyConfirm(modifyTargetItem.id)">확인</button>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "ToDoMain",

  components: {
    TodoItem,
  },

  //data 시작
  data() {
    return {
      isModifyMod: false,
      newTodo: "",
      modifyTargetItem: {},
      chkList: [],
      todos: [
        {
          id: 3,
          item: "vue 공부하기 2",
        },
        {
          id: 4,
          item: "vue 공부하기 3",
        },
        {
          id: 5,
          item: "vue 공부하기 4",
        },
        {
          id: 6,
          item: "vue 공부하기 5",
        },
      ],
    };
  },
  //data 시작

  //methods 시작
  methods: {
    checked(id, check) {
      check
        ? this.chkList.push(id)
        : this.chkList?.splice(this.chkList.indexOf(id), 1);
    },
    drop(id) {
      this.todos = this.todos.filter((todo) => todo.id !== parseInt(id));
    },
    add() {
      this.todos.push({
        id: this.todos[this.todos.length - 1]?.id + 1 || 1,
        item: this.newTodo,
      });
    },
    modify(id) {
      let todo = this.todos.find((todo) => todo.id === parseInt(id));
      this.modifyTargetItem = {
        ...todo,
      };

      this.isModifyMod = true;
    },
    modifyConfirm(id) {
      let find = this.todos.find((todo) => todo.id === parseInt(id));
      find.item = this.modifyTargetItem.item;
      this.isModifyMod = false;
    },
    chkDelete() {
      this.chkList.forEach((id) => this.drop(id));
      this.chkList = [];
    },
  },
  //methods 끝
};
</script>

<style scoped></style>
