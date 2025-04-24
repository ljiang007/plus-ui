import TextRenderer from '@/components/LowCode/base/text/TextRenderer.vue';
import TextEditor from '@/components/LowCode/base/text/TextEditor.vue';
import ImageRenderer from '@/components/LowCode/base/image/ImageRenderer.vue';
import ImageEditor from '@/components/LowCode/base/image/ImageEditor.vue';

import GridRenderer from '@/components/LowCode/base/grid/GridRenderer.vue';
import GridEditor from '@/components/LowCode/base/grid/gridEditor.vue';

import ButtonRenderer from '@/components/LowCode/base/button/ButtonRenderer.vue';
import ButtonEditor from '@/components/LowCode/base/button/ButtonEditor.vue';

interface ComponentItem {
  type: string;
  label: string;
  props?: any;
  children?: ComponentItem[];
}

interface ComponentMaps {
  basics: ComponentItem[];
  layout: ComponentItem[];
  custom: ComponentItem[];
}

export const componentRendererMap = {
  text: TextRenderer,
  image: ImageRenderer,
  grid: GridRenderer,
  button: ButtonRenderer
};

export const componentEditorMap = {
  text: TextEditor,
  image: ImageEditor,
  grid: GridEditor,
  button: ButtonEditor
};

export const componentMaps: ComponentMaps = {
  basics: [
    {
      type: 'text',
      label: '文本',
      props: {
        text: '默认文本',
        style: {
          fontSize: 14,
          color: '#000',
          textAlign: 'left'
        },
        attr: {}
      }
    },
    {
      type: 'image',
      label: '图片',
      props: {
        attr: {
          src: 'https://static.form-create.com/example.png'
        },
        style: {
          width: 100,
          height: 100
        }
      }
    },
    { type: 'button', label: '按钮', props: { text: '按钮', attr: { type: 'default' }, style: { fontSize: 14, color: '#000' } } }
  ],
  layout: [
    {
      type: 'grid',
      label: '栅格布局',
      props: {},
      children: [
        { type: 'col', label: '列', props: { attr: { span: 8 } }, children: [] },
        { type: 'col', label: '列', props: { attr: { span: 8 } }, children: [] },
        { type: 'col', label: '列', props: { attr: { span: 8 } }, children: [] }
      ]
    },
    { type: 'card', label: '卡片布局' }
  ],
  custom: [
    { type: 'news', label: '新闻组件' },
    { type: 'notice', label: '公告组件' },
    { type: 'product', label: '风采组件' },
    { type: 'overview', label: '概况组件' },
    { type: 'carousel', label: '轮播组件' }
  ]
};
