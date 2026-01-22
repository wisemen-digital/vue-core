<template>
  <svg
    viewBox="25 25 50 50"
    aria-hidden="true"
    class="animate-spinner"
  >
    <circle
      class="size-full animate-spinner-path"
      cx="100%"
      cy="100%"
      fill="none"
      r="20"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="4"
      stroke-dasharray="1, 200"
      stroke-dashoffset="0"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.animate-spinner {
  animation: loading-spinner-rotate 2s linear infinite;
}

.animate-spinner-path {
  animation: loading-spinner-path 1.5s ease-in-out infinite;
}

@keyframes loading-spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-spinner-path {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
