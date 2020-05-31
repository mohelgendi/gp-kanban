<template>
  <div class="list-container shadow">
    <b-row>
      <b-col cols="8">
        <contenteditable
          spellcheck="false"
          class="list-name"
          tag="p"
          :contenteditable="true"
          v-model="list.title"
          :noNL="true"
        />
      </b-col>
      <b-col cols="1" style="margin-left:15px;">
        <b-icon v-b-modal="`modal-delete-${list.id}`" class="trash-icon" icon="trash-fill" font-scale="1"></b-icon>
        <b-modal
          @ok="deleteList(list)"
          :id="`modal-delete-${list.id}`"
          size="sm"
          button-size="sm"
          centered
          title="Delete List"
        >This list will be deleted.</b-modal>
      </b-col>
      <b-col cols="1">
        <b-icon class="drag-icon" icon="arrows-move" font-scale="1.1"></b-icon>
      </b-col>
    </b-row>
    <draggable
      :class="list.cards.length?'':'empty-card'"
      v-model="list.cards"
      :group="{ name: 'list.cards', pull: true, put: true }"
      :sort="true"
      :animation="400"
    >
      <Card v-for="(card, i) in list.cards" :key="i" :card="card" :list="list" :board="board" />
    </draggable>
    <b-icon @click="addCard()" class="add-plus" icon="plus" font-scale="3"></b-icon>
  </div>
</template>

<script>
import Card from '../components/Card'
import draggable from 'vuedraggable'
import helper from '../helpers/helper'
export default {
  name: 'List',
  props: ['list', 'board'],
  components: { Card, draggable },
  data () {
    return {
    }
  },
  methods: {
    addCard () {
      const newCard = {
        id: helper.generateUUID(),
        title: 'click to edit',
        content: 'add your content',
        tags: [],
        assignees: [],
        attachments: []
      }
      this.list.cards.push(newCard)
    },
    deleteList (list) {
      this.board.lists = this.board.lists.filter(x => { return x.id !== list.id })
    }
  }
}
</script>

<style scoped>
.list-container {
  min-height: 9rem;
  background-color: #d4d4d4ab;
  border-radius: 10px;
  padding: 0.3rem 0.8rem;
  display: block;
}
.list-name {
  font-size: 1.3rem;
}

.add-plus {
  opacity: 0.5;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}
.empty-card {
  border-radius: 5px;
  border: 1px rgba(128, 128, 128, 0.603) dashed;
  min-height: 4.5rem;
  text-align: center;
}
.drag-icon {
  margin-top: 10px;
  cursor: all-scroll;
  opacity: 0.9;
}
.trash-icon {
  margin-top: 10px;
  cursor: pointer;
  opacity: 0.9;
}
</style>
