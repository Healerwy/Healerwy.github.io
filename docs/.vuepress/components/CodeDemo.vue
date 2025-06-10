<!-- docs/.vuepress/components/CodeDemo.vue -->
<template>
  <div class="code-demo">
    <slot />
    <div class="demo-footer">
      <span class="demo-label">代码示例</span>
    </div>
  </div>
</template>

<style scoped>
.code-demo {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.demo-footer {
  margin-top: 12px;
  text-align: right;
  font-size: 12px;
  color: #888;
}
</style>