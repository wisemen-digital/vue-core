<script setup lang="ts">
import { ref } from 'vue'
import { useTemplateModuleContext } from '@wisemen/template-module'
import { useTemplateModuleData } from '@wisemen/template-module'
import { TemplateModuleCard } from '@wisemen/template-module'

// Get module context - this will now work because we're inside ModuleProvider
const context = useTemplateModuleContext()
const { apiUrl, config } = useTemplateModuleData()

const message = ref('Welcome to Module Registry Playground!')
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>🚀 Module Registry Playground</h1>

      <div class="section">
        <h2>Module Component</h2>
        <div style="display: grid; gap: 16px;">
          <TemplateModuleCard title="Template Module Config" />
        </div>
      </div>

      <div class="section">
        <h2>Module Status</h2>
        <div class="status">
          <div class="status-item">
            <span class="label">Module:</span>
            <span class="value success">Template Module ✓</span>
          </div>
          <div class="status-item">
            <span class="label">Registry:</span>
            <span class="value success">Active ✓</span>
          </div>
          <div class="status-item">
            <span class="label">Context:</span>
            <span class="value success">Injected ✓</span>
          </div>
          <div class="status-item">
            <span class="label">Component:</span>
            <span class="value success">Rendering ✓</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Module Configuration</h2>
        <div class="config">
          <div class="config-item">
            <span class="key">API URL:</span>
            <span class="val">{{ apiUrl }}</span>
          </div>
          <div class="config-item">
            <span class="key">Debug Mode:</span>
            <span class="val">{{ config?.debug ? '🟢 ON' : '🔴 OFF' }}</span>
          </div>
          <div class="config-item">
            <span class="key">Environment:</span>
            <span class="val">Development</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>How It Works</h2>
        <div class="explanation">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Registry Created</h3>
              <p>A ModuleRegistry instance manages all modules</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Module Registered</h3>
              <p>Template module registered with configuration options</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>ModuleProvider Component</h3>
              <p>Provider wraps the app and injects all module contexts</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Components & Composables</h3>
              <p>Use module components and composables like TemplateModuleCard</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>Features Demonstrated</h2>
        <ul class="features">
          <li>✅ Module registration with configuration</li>
          <li>✅ ModuleProvider component for context injection</li>
          <li>✅ Module composables integration</li>
          <li>✅ Vue components from modules</li>
          <li>✅ TypeScript translations</li>
          <li>✅ Multi-language support</li>
          <li>✅ Type safety across the board</li>
        </ul>
      </div>

      <div class="section info">
        <p>{{ message }}</p>
        <p style="font-size: 12px; opacity: 0.7; margin-top: 8px">
          This playground demonstrates the @wisemen/vue-core-module-registry system in action
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 32px;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.section.info {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  text-align: center;
  padding: 24px;
}

.section.info p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

.status {
  display: grid;
  gap: 12px;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.status-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #555;
}

.value {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}

.value.success {
  background: #d4edda;
  color: #155724;
}

.config {
  display: grid;
  gap: 12px;
}

.config-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.key {
  font-weight: 600;
  color: #555;
}

.val {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.locales {
  display: grid;
  gap: 16px;
}

.locale-selector {
  display: flex;
  align-items: center;
  gap: 12px;
}

.locale-selector label {
  font-weight: 600;
  color: #555;
}

.locale-dropdown {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.locale-dropdown:hover {
  border-color: #667eea;
}

.translation-display {
  display: grid;
  gap: 10px;
  background: white;
  padding: 16px;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.translation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
}

.tkey {
  font-weight: 600;
  color: #555;
  font-size: 14px;
}

.tval {
  color: #667eea;
  font-size: 14px;
  max-width: 60%;
  text-align: right;
}

.explanation {
  display: grid;
  gap: 16px;
}

.step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
}

.step-content h3 {
  font-size: 14px;
  margin-bottom: 4px;
  color: #333;
}

.step-content p {
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

.features {
  list-style: none;
  display: grid;
  gap: 10px;
}

.features li {
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
}

@media (max-width: 600px) {
  .card {
    padding: 24px;
  }

  h1 {
    font-size: 24px;
  }

  .section {
    padding: 16px;
  }
}
</style>
