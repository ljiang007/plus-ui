import TextRenderer from '@/components/LowCode/base/text/TextRenderer.vue';
import TextEditor from '@/components/LowCode/base/text/TextEditor.vue';
import ImageRenderer from '@/components/LowCode/base/image/ImageRenderer.vue';
import ImageEditor from '@/components/LowCode/base/image/ImageEditor.vue';

import GridRenderer from '@/components/LowCode/base/grid/GridRenderer.vue';
import GridEditor from '@/components/LowCode/base/grid/gridEditor.vue';

import ButtonRenderer from '@/components/LowCode/base/button/ButtonRenderer.vue';
import ButtonEditor from '@/components/LowCode/base/button/ButtonEditor.vue';

import NewsRenderer from '@/components/LowCode/base/news/newsRenderer.vue';
import NewsEditor from '@/components/LowCode/base/news/newsEditor.vue';

import NoticeRenderer from '@/components/LowCode/base/notice/noticeRenderer.vue';
import NoticeEditor from '@/components/LowCode/base/notice/noticeEditor.vue';

import MienRenderer from '@/components/LowCode/base/mien/mienRenderer.vue';
import MienEditor from '@/components/LowCode/base/mien/mienEditor.vue';

import SurveyRenderer from '@/components/LowCode/base/survey/surveyRenderer.vue';
import SurveyEditor from '@/components/LowCode/base/survey/surveyEditor.vue';

import WeekRenderer from '@/components/LowCode/base/week/weekRenderer.vue';
import WeekEditor from '@/components/LowCode/base/week/weekEditor.vue';

import SwiperRenderer from '@/components/LowCode/base/swiper/swiperRenderer.vue';
import SwiperEditor from '@/components/LowCode/base/swiper/swiperEditor.vue';

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
  button: ButtonRenderer,
  news: NewsRenderer,
  notice: NoticeRenderer,
  mien: MienRenderer,
  survey: SurveyRenderer,
  week: WeekRenderer,
  swiper: SwiperRenderer
};

export const componentEditorMap = {
  text: TextEditor,
  image: ImageEditor,
  grid: GridEditor,
  button: ButtonEditor,
  news: NewsEditor,
  notice: NoticeEditor,
  mien: MienEditor,
  survey: SurveyEditor,
  week: WeekEditor,
  swiper: SwiperEditor
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
    {
      type: 'news',
      label: '新闻组件',

      props: {
        temp: '1',
        attr: {
          path: '',
          title: '新闻标题',
          more: '更多 >',
          morePath: '',
          conTitle: '内容标题',
          content: '内容',
          image: 'https://static.form-create.com/example.png',
          time_icon: 'Timer',
          time: '2025-02-28',
          perNum_icon: 'View',
          perNum: 2322
        },
        style: {
          padding: 20,
          margin: 0,
          background: '#fff',
          borderRadius: 10
        }
      }
    },
    {
      type: 'notice',
      label: '公告组件',
      props: {
        temp: '1',
        attr: {
          path: '',
          title: '公告标题',
          more: '更多 >',
          morePath: '',
          titContent: '公告内容标题',
          content: '公告内容',
          time: '2025-02-28',
          createdBy: '---学校',
          image: 'https://static.form-create.com/example.png'
        },
        style: {
          padding: 20,
          margin: 0,
          background: '#fff',
          borderRadius: 10
        }
      }
    },
    {
      type: 'mien',
      label: '风采组件',
      props: {
        temp: '1',
        attr: {
          title: '风采标题',
          more: '更多 >',
          morePath: '',
          children: [
            {
              image: 'https://static.form-create.com/example.png',
              txt: '风采',
              path: '',
            },
            {
              image: 'https://images.pexels.com/photos/31752572/pexels-photo-31752572.jpeg',
              txt: '风采',
              path: '',
            },
            {
              image: 'https://static.form-create.com/example.png',
              txt: '风采',
              path: '',
            }
          ]
        },
        style: {
          padding: 20,
          margin: 0,
          background: '#fff',
          borderRadius: 10
        }
      }
    },
    { type: 'survey', label: '概况组件' },
    { type: 'week', label: '周安排组件' },
    { type: 'swiper', label: '轮播组件' }
  ]
};
