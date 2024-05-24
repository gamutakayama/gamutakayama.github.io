import type { VNode } from "vue";
import { defineComponent, h } from "vue";
import { ClientOnly } from "vuepress/client";

export default defineComponent({
  name: "BingHeroBackground",

  setup() {
    const url = "https://imgapi.cn/bing.php";

    return (): VNode => {
      return h(ClientOnly, () => [
        h("div", {
          class: "vp-blog-mask",
          style: {
            background: `url(${url}) center/cover no-repeat`,
          },
        }),
      ]);
    };
  },
});
