<template>
  <div class="card shadow">
    <b-row>
      <b-col cols="8">
        <contenteditable
          spellcheck="false"
          class="card-heading"
          tag="p"
          :contenteditable="true"
          v-model="card.title"
          :noNL="true"
        />
      </b-col>
      <b-col cols="2">
        <b-dropdown
          dropright
          size="sm"
          variant="linko"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template v-slot:button-content>
            <b-icon icon="three-dots" font-scale="1.5"></b-icon>
          </template>
          <b-dropdown-item v-b-modal="`modal-delete-${card.id}`">Delete</b-dropdown-item>
          <b-modal
            @ok="deleteCard(card)"
            :id="`modal-delete-${card.id}`"
            size="sm"
            button-size="sm"
            centered
            title="Delete Card"
          >This card will be deleted.</b-modal>
          <b-dropdown-item v-b-modal="`modal-center-${card.id}`">Edit</b-dropdown-item>
          <b-modal :id="`modal-center-${card.id}`" centered title="Edit Card" ok-only>
            <b-form-group id="input-group-1" label="Card title" label-for="card-title">
              <b-form-input id="card-title" v-model="card.title" :value="card.title" type="text"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Card content" label-for="card-content">
              <b-form-textarea
                id="card-content"
                v-model="card.content"
                :value="card.content"
                type="text"
                rows="3"
                no-resize
              ></b-form-textarea>
            </b-form-group>
            <b-form-group id="input-group-3" label="Add assignees to the card">
              <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
              <b-form-tags v-model="value" size="lg" add-on-change no-outer-focus class="mb-2">
                <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                        @remove="removeTag(tag)"
                        :title="tag"
                        :disabled="disabled"
                        variant="primary"
                      >{{ tag }}</b-form-tag>
                    </li>
                  </ul>
                  <b-form-select
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    :disabled="disabled || injectedOptions.length === 0"
                    :options="injectedOptions"
                  >
                    <template v-slot:first>
                      <!-- This is required to prevent bugs with Safari -->
                      <option disabled value>Choose a member...</option>
                    </template>
                  </b-form-select>
                </template>
              </b-form-tags>
            </b-form-group>
            <b-form-group id="input-group-4" label="Add tags to the card">
              <b-form-tags
                remove-on-delete
                placeholder="Add tags and press enter..."
                input-id="tags-basic"
                v-model="cardTags"
                class="mb-2"
              ></b-form-tags>
            </b-form-group>
          </b-modal>
        </b-dropdown>
      </b-col>
      <b-col cols="2">
        <b-icon class="drag-handle" icon="arrows-move" font-scale="1"></b-icon>
      </b-col>
    </b-row>
    <hr class="my-0" />
    <contenteditable
      spellcheck="false"
      class="edit-content"
      tag="p"
      :contenteditable="true"
      v-model="card.content"
      :noNL="false"
    />
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
              v-for="(avatar, i) in card.assignees"
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
  props: ['card', 'list', 'board'],
  data () {
    return {
      value: [],
      cardTags: []
    }
  },
  created () {
    this.retrieveAssignees()
    this.retrieveTags()
  },
  methods: {
    deleteCard (card) {
      this.list.cards = this.list.cards.filter(x => { return x.id !== card.id })
    },
    retrieveAssignees () {
      this.card.assignees.forEach(assignee => {
        this.value.push(assignee.name)
      })
    },
    retrieveTags () {
      this.card.tags.forEach(tag => {
        this.cardTags.push(tag.title)
      })
    }
  },
  computed: {
    injectedOptions () {
      const options = []
      this.board.participants.forEach(participant => {
        if (!this.value.includes(participant.name)) {
          options.push(participant.name)
        }
      })
      return options
    }
  },
  watch: {
    value () {
      this.card.assignees = this.board.participants.filter(p => this.value.includes(p.name))
    },
    cardTags () {
      const tags = []
      const variants = ['primary', 'secondary', 'success', 'warning', 'danger']
      this.cardTags.forEach((tag, i) => {
        const temp = {}
        temp.title = tag
        temp.variant = variants[Math.floor(Math.random() * 5)]
        tags.push(temp)
      })
      this.card.tags = tags
    }
  }
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
.edit-content:focus {
  border: 1px rgba(51, 51, 51, 0.144) dashed;
  border-radius: 8px;
  padding: 3px;
}
.drag-handle {
  margin-top: 7px;
  cursor: all-scroll;
  opacity: 0.8;
}
</style>
