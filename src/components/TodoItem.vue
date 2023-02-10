<template>
  <div>
    <input
      type="checkbox"
      :value="todo.id"
      @change="$emit('checked', $event.target.value, $event.target.checked)"
    />
    :: {{ todo.item }} ::
    <button @click="modify">수정</button>
    <button @click="drop">삭제</button>
  </div>
</template>

<script>
/**
 * todo
 *  체크박스가 표시된 채로 남는 부분 확인
 * */

export default {
  name: "TodoItem",
  props: {
    todo: {},
  },

  methods: {
    modify() {
      this.$emit("modifyItem", this.todo.id);
    },

    drop() {
      this.$emit("dropItem", this.todo.id);
    },
  },
};
</script>

<style scoped></style>
