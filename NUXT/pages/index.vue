<template>
<div>
  <div class="container">
    <h2>Vue Container</h2>
    <h3>{{inputText}}</h3>
    <div id="react-app"></div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      inputText: "React Input",
    };
  },
  methods: {
    handleReactInputChange(event){
      this.inputText = event.target.value;
    }
  },
  mounted() {
    window.ReactInput.mount({
      handleReactInputChange: this.handleReactInputChange, 
      inputText: this.inputText
    })
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.container input {
  background: red;
  height: 100px;
}
</style>
