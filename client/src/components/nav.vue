<template>
    <nav>
      <div class="header">
        <div class="inner_header">
          <div class="spext_header">
            <a @click="$router.push('/')"><h1>SP<span>EXT</span></h1></a>
          </div>
          <ul class="navigation">
            <a @click="$router.push('/dashboard')"><li>Home</li></a>
            <a @click="$router.push('/about-us')"><li>About</li></a>
            <a @click="$router.push('/contact-us')"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>

</style>
