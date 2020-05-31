<template>
  <div class="board-container">
    <b-row>
      <p class="board-name">{{board.title}}</p>
    </b-row>
    <b-row>
      <draggable v-model="board.lists" filter=".ignore-elements" :group="{ name: 'board.lists', pull: false, put: false }" :sort="true" :animation="400">
        <b-col
          v-for="(list, i) in board.lists"
          :key="i"
          class="board-list"
          v-show="board.lists.length"
        >
          <List :list="list" :board="board"/>
        </b-col>
        <b-col class="board-col ignore-elements">
          <center class="add-plus" @click="addList()">+</center>
        </b-col>
      </draggable>
    </b-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import List from '../components/List'
import helper from '../helpers/helper'
export default {
  name: 'Board',
  props: ['board'],
  components: { List, draggable },
  methods: {
    addList () {
      const newList = {
        id: helper.generateUUID(),
        title: 'New List',
        color: '#212s55',
        cards: []
      }

      this.board.lists.push(newList)
    }
  }
}
</script>

<style scoped>
.add-plus {
  font-size: 6rem;
  color: rgba(128, 128, 128, 0.137);
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  cursor: pointer;
}
.board-container {
  margin: 0 5rem;
}
.board-col {
  border: rgba(107, 107, 107, 0.185) 2px dashed;
  margin: 1rem;
  border-radius: 10px;
  padding: 0px;
  max-width: 17rem;
  min-width: 17rem;
  max-height: 9rem;
  float: left;
}
.board-list {
  margin: 1rem;
  border-radius: 10px;
  padding: 0px;
  max-width: 17rem;
  min-width: 17rem;
  float: left;
}
.board-name {
  margin: 1rem;
  font-size: 1.75rem;
  font-weight: 400;
}
</style>
