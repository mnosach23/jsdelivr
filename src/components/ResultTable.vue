<template>
  <v-data-table
      :headers="headers"
      :items="packages"
      sort-by="calories"
      class="result-table elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Package List</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Detailed Info</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                  <p>
                    Name: {{ detailItem.name }}
                  </p>
                  <p>
                    Description: {{ detailItem.description }}
                  </p>
                  <p>
                    Main file: {{ detailItem.mainfile }}
                  </p>
                  <p>
                    Last version: {{ detailItem.lastversion }}
                  </p>
                  <p>
                    Homepage: {{ detailItem.homepage }}
                  </p>
                  <p>
                    Github: {{ detailItem.github }}
                  </p>
                  <p>
                    Versions: {{ detailItem.versions }}
                  </p>
                  <p>
                    Author: {{ detailItem.author }}
                  </p>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr @click="showDetails(item)">
        <td>{{ item.name }}</td>
        <td>{{ item.mainfile }}</td>
        <td>{{ item.lastversion }}</td>
        <td>{{ item.homepage }}</td>
        <td>{{ item.author }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ResultTable",

  computed: {
    ...mapGetters([
      'packages',
    ])
  },

  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Main file', value: 'mainfile' },
      { text: 'Last version', value: 'lastversion' },
      { text: 'Homepage', value: 'homepage' },
      { text: 'Author', value: 'author' }
    ],
    detailIndex: -1,
    detailItem: {
      name: '',
      mainfile: 0,
      lastversion: 0,
      homepage: 0,
      author: 0,
    },
    defaultItem: {
      name: '',
      mainfile: 0,
      lastversion: 0,
      homepage: 0,
      author: 0,
    },
  }),

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  methods: {
    showDetails (item) {
      this.detailIndex = this.packages.indexOf(item)
      this.detailItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.detailItem = Object.assign({}, this.defaultItem)
        this.detailIndex = -1
      })
    },
  },
}
</script>

<style lang="scss">
.result-table {
  width: 100%;
}
</style>