<template>
  <div class="list-container shadow">
    <b-row>
      <b-col cols="9">
        <p class="list-name">List Name</p>
        <div class="field">
          <span
            class="field-value"
            v-show="!showField('name')"
            @click="focusField('name')"
          >{{user.name}}</span>
          <input
            v-model="user.name"
            v-show="showField('name')"
            id="user-name"
            type="text"
            class="field-value form-control"
            @focus="focusField('name')"
            @blur="blurField"
          />
        </div>
      </b-col>
      <b-col cols="3">
        <b-dropdown
          style="float: right; opacity: 0.9"
          dropright
          size="sm"
          variant="linkr"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template v-slot:button-content>
            <b-icon icon="three-dots" font-scale="2"></b-icon>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <draggable :options="{animation:400}">
      <Card v-for="(card, i) in cards" :key="i" :card="card" />
    </draggable>
    <div v-show="cards.length==0" class="empty-card"></div>
    <b-icon @click="addCard()" class="add-plus" icon="plus" font-scale="3"></b-icon>
  </div>
</template>

<script>
import Card from '../components/Card'
import draggable from 'vuedraggable'
export default {
  name: 'List',
  components: { Card, draggable },
  data () {
    return {
      listName: 'To Do List',
      id: 'sd21',
      cards: [],
      user: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    addCard () {
      const card = {
        header: 'Card Header',
        content: 'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        tags: [
          { title: 'data', variant: 'danger' },
          { title: 'math', variant: 'success' }
        ],
        avatars: [
          { variant: 'primary' }, { variant: 'danger' }, { variant: 'warning' }
        ]
      }
      this.cards.push(card)
    },
    focusField (name) {
      this.editField = name
    },
    blurField () {
      this.editField = ''
    },
    showField (name) {
      return (this.user[name] === '' || this.editField === name)
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
  min-height: 5rem;
  text-align: center;
}
</style>
