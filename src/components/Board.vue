<template>
  <div class="board-container">
    <b-row>
      <p class="board-name">Board Name</p>
    </b-row>
    <b-row>
      <b-col class="board-list">
        <List/>
      </b-col>
      <b-col class="board-col">
        <center class="add-plus">+</center>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import List from '../components/List'
export default {
  name: 'Board',
  components: { List }
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
}
.board-container {
  margin: 0 5rem;
}
.board-col {
  border: rgba(107, 107, 107, 0.185) 2px dashed;
  margin: 1rem;
  border-radius: 10px;
  padding: 0px;
  max-width: 18rem;
  min-width: 18rem;
  max-height: 9rem;
}
.board-list {
  margin: 1rem;
  border-radius: 10px;
  padding: 0px;
  max-width: 18rem;
  min-width: 18rem;
}
.board-name {
  margin: 1rem;
  font-size: 1.75rem;
  font-weight: 400;
}
</style>
