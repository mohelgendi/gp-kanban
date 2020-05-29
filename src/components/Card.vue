<template>
  <div class="card shadow">
    <b-row>
      <b-col cols="9">
        <p class="card-heading">{{card.header}}</p>
      </b-col>
      <b-col cols="3">
        <b-dropdown style="float: right; opacity: 0.9" dropright size="sm" variant="linko" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <b-icon icon="three-dots" font-scale="1.5"></b-icon>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <hr class="my-0" />
    <p>{{card.content}}</p>
    <b-row>
      <b-col class="tags">
        <b-badge
          v-for="(tag, i) in card.tags"
          :key="i"
          class="badge"
          pill
          :variant="tag.variant"
        >{{tag.title}}</b-badge>
      </b-col>
      <b-col class="avatars">
        <div class="avatars-float">
          <b-avatar-group overlap="0.4" size="1.5rem">
            <b-avatar
              v-for="(avatar, i) in card.avatars"
              :key="i"
              :src="avatar.image"
              :variant="avatar.variant"
            ></b-avatar>
          </b-avatar-group>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card']
}
</script>

<style scoped >
.card {
  min-height: 5rem;
  background-color: rgb(245, 250, 255);
  border-radius: 5px;
  padding: 5px 10px;
  color: rgba(0, 0, 0, 0.651);
  margin-bottom: 0.75rem;
}
.card-heading {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.486);
  margin: 0;
}
.badge {
  display: inline;
  margin-right: 5px;
}
.avatars-float {
  float: right;
}
.btn-link {
  color: #c2c2c2 !important;
}
</style>
