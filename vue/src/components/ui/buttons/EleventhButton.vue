
<template>
  <button class="eleventh-btn" :class="className">
    <slot>
      content
    </slot>
  </button>
</template>

<script>
export default {
  name: "EleventhPage",
  props: {
    type: String,
  },
  computed: {
    className () {
      return `eleventh-btn__${this.type}`;

    }
  }
}
</script>

<style scoped lang="less">
  .eleventh-btn {
    font-family: "Montserrat Alternates", sans-serif;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    border: 2px solid;

    &__successful {
      background-color: #04AA6D;
      color: white;
      border: 2px solid;

      &:active {
        color: white;
        background-color: #04AA6D;
        border-radius: 50px;
      }

      &:hover {
        background-color: white;
        color: #04AA6D;
        border: 2px solid #04AA6D;
      }
    }

    &__info {
      background-color: #f0c502;
      color: white;
      border: 2px solid #f0c502;

      &:active {
        color: white;
        background-color: #f0c502;
        border-radius: 50px;
      }

      &:hover {
        background-color: white;
        color: #f0c502;
        border: 2px solid #f0c502;
      }
    }

    &__warning {
      background-color: #e17b01;
      color: white;
      border: 2px solid #e17b01;

      &:active {
        color: white;
        background-color: #e17b01;
        border-radius: 50px;
      }

      &:hover {
        background-color: white;
        color: #e17b01;
        border: 2px solid #e17b01;
      }
    }

    &__danger {
      background-color: #b8154c;
      color: white;
      border: 2px solid #b8154c;

      &:active {
        color: white;
        background-color: #b8154c;
        border-radius: 50px;
      }

      &:hover {
        background-color: white;
        color: #b8154c;
        border: 2px solid #b8154c;
      }
    }
  }
</style>

