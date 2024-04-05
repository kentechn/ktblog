<script setup lang="ts"></script>

<template>
  <div>
    <Header />
    <div class="container mx-auto mt-10 px-4 mb-6">
      <main>
        <div class="md:flex mx-auto">
          <div class="md:w-9/12 max-md:mb-12 md:px-3">
            <slot />
          </div>
          <div class="md:w-4/12">
            <div><Sidebar /></div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
