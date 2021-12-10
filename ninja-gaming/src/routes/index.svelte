<script>
  let title = 'Ninja Gaming Guides'

  const updateTitle = () => {
    title = "Something completely different"
  }

</script>

<div class="index">
  <h2>{title}</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laborum magnam deleniti recusandae, quis aperiam, architecto neque, voluptatem dicta expedita aut id voluptate omnis consectetur dolore! Quo quae perferendis vel dignissimos quasi illum aperiam dolores, id, laudantium voluptatibus fugiat accusantium impedit velit modi ratione iure qui culpa! Repellendus cupiditate aliquid quam magni. Laudantium, laboriosam quibusdam. Provident, quae incidunt! Aspernatur, vel?</p>

  <button on:click={updateTitle}>change title</button>
  <input type="text" bind:value={title}>
</div>

<style>
  .index {
    text-align: center;
    display: block;
    margin: 20px auto;
  }
</style>