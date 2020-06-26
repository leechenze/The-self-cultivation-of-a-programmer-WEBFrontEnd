<template>
  <div id="form-helper">
      <slot name="title"></slot>
      <h3>
          As a PMI member, you’ll gain exclusive access to PMI publications and global standards.
          In addition, leverage thousands of tools, templates, articles, guides and other resources to keep you informed and remain efficient.
      </h3>
      <slot name="text"></slot>
  </div>
</template>

<script>


export default {
    name: "form-helper",
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>
h1{
    color: firebrick;
}

h2{
    background-color: greenyellow;
}

</style>