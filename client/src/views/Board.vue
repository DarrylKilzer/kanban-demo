<template>
  <div class="board">
    {{board.title}}
    <button class="btn btn-danger" @click="delortBoard">Delort</button>
  </div>
</template>

<script>
export default {
  name: "board",
  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(
          b => b._id == this.$route.params.boardId
        ) || {
          title: "Loading..."
        }
      );
    }
  },
  methods: {
    delortBoard() {
      this.$store.dispatch("delortBoard", this.$route.params.boardId);
    }
  }
};
</script>
