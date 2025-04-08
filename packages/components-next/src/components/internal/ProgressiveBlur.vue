<template>
  <div class="progressive-blur-container">
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="blur-filter" />
    <div class="gradient" />
  </div>
</template>

<style>
.progressive-blur-container {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 10%;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.progressive-blur-container > .blur-filter {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.progressive-blur-container > .blur-filter:nth-child(1) {
  backdrop-filter: blur(1px);
  mask: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 40%);
}

.progressive-blur-container > .blur-filter:nth-child(2) {
  backdrop-filter: blur(2px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 50%);
}

.progressive-blur-container > .blur-filter:nth-child(3) {
  backdrop-filter: blur(4px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 60%);
}

.progressive-blur-container > .blur-filter:nth-child(4) {
  backdrop-filter: blur(8px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 70%);
}

.progressive-blur-container > .blur-filter:nth-child(5) {
  backdrop-filter: blur(16px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 90%);
}

.progressive-blur-container > .blur-filter:nth-child(6) {
  backdrop-filter: blur(32px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 80%);
}

.progressive-blur-container > .blur-filter:nth-child(7) {
  z-index: 10;
  background-filter: blur(64px);
  mask: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%)
}

.progressive-blur-container > .gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, var(--background-color-primary));
}
</style>
