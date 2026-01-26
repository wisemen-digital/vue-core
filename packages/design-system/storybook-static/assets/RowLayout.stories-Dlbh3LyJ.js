import{_ as o}from"./RowLayout-DckqkDY3.js";import"./iframe-Dxv0N_rZ.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/RowLayout",tags:["autodocs"],component:o},e='<div class="bg-brand-500 text-white p-4 rounded-md">Item</div>',n={render:()=>({components:{RowLayout:o},template:`
      <RowLayout>
        ${e}
        ${e}
        ${e}
      </RowLayout>
    `})},t={render:()=>({components:{RowLayout:o},template:`
      <RowLayout gap="xl">
        ${e}
        ${e}
        ${e}
      </RowLayout>
    `})},a={render:()=>({components:{RowLayout:o},template:`
      <RowLayout justify="center">
        ${e}
        ${e}
        ${e}
      </RowLayout>
    `})},r={render:()=>({components:{RowLayout:o},template:`
      <RowLayout justify="between">
        ${e}
        ${e}
        ${e}
      </RowLayout>
    `})},s={render:()=>({components:{RowLayout:o},template:`
      <RowLayout align="end">
        <div class="bg-brand-500 text-white p-4 rounded-md h-20">Tall Item</div>
        ${e}
        ${e}
      </RowLayout>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RowLayout
    },
    template: \`
      <RowLayout>
        \${ExampleBox}
        \${ExampleBox}
        \${ExampleBox}
      </RowLayout>
    \`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RowLayout
    },
    template: \`
      <RowLayout gap="xl">
        \${ExampleBox}
        \${ExampleBox}
        \${ExampleBox}
      </RowLayout>
    \`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RowLayout
    },
    template: \`
      <RowLayout justify="center">
        \${ExampleBox}
        \${ExampleBox}
        \${ExampleBox}
      </RowLayout>
    \`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RowLayout
    },
    template: \`
      <RowLayout justify="between">
        \${ExampleBox}
        \${ExampleBox}
        \${ExampleBox}
      </RowLayout>
    \`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RowLayout
    },
    template: \`
      <RowLayout align="end">
        <div class="bg-brand-500 text-white p-4 rounded-md h-20">Tall Item</div>
        \${ExampleBox}
        \${ExampleBox}
      </RowLayout>
    \`
  })
}`,...s.parameters?.docs?.source}}};const d=["Default","WithLargeGap","CenterJustified","SpaceBetween","AlignEnd"];export{s as AlignEnd,a as CenterJustified,n as Default,r as SpaceBetween,t as WithLargeGap,d as __namedExportsOrder,c as default};
