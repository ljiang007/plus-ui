import TextRenderer from "@/components/LowCode/base/text/TextRenderer.vue";
import ImageRenderer from "@/components/LowCode/base/image/ImageRenderer.vue";
import TextEditor from "@/components/LowCode/base/text/TextEditor.vue";
import ImageEditor from "@/components/LowCode/base/image/ImageEditor.vue";

interface ComponentItem {
  type: string;
  label: string;
  props?: any;
}

interface ComponentMaps {
  basics: ComponentItem[];
  layout: ComponentItem[];
  custom: ComponentItem[];
}

export const componentRendererMap = {
  text: TextRenderer,
  image: ImageRenderer,
};

export const componentEditorMap = {
  text: TextEditor,
  image: ImageEditor,
};

export const componentMaps: ComponentMaps = {
  basics: [
    {
      type: "text",
      label: "文本",
      props: {
        text: "默认文本",
        style: {
          fontSize: "14px",
          color: "#000000",
          margin: "0px",
          padding: "0px",
          textAlign: "left",
        },
        attr: {},
      },
    },
    {
      type: "image",
      label: "图片",
      props: {
        attr: {
          src: "https://static.form-create.com/example.png",
        },
        style: {
          width: "100px",
          height: "100px",
          margin: "0px",
          padding: "0px",
        },
      },
    },
    { type: "button", label: "按钮" },
    { type: "link", label: "链接" },
  ],
  layout: [
    { type: "layout", label: "栅格布局" },
    { type: "card", label: "卡片布局" },
  ],
  custom: [
    { type: "news", label: "新闻组件" },
    { type: "notice", label: "公告组件" },
    { type: "product", label: "风采组件" },
    { type: "overview", label: "概况组件" },
    { type: "carousel", label: "轮播组件" },
  ],
};
