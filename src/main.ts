import Vue from 'vue';
import App from './App.vue';
import 'element-ui/packages/theme-chalk/lib/reset.css';

Vue.config.productionTip = process.env.NODE_ENV !== 'development';

const render = (container?: Document) => {
  const id = '#app';
  const node = container
    ? container.querySelector(id)!
    : document.querySelector(id)!;
  return new Vue({ render: (h) => h(App) }).$mount(node);
};

if (!window.__POWERED_BY_QIANKUN__) render();

let app: ReturnType<typeof render> | null = null;

export async function bootstrap() {}

export async function mount({ container }: Record<string, any>) {
  app = render(container);
}

export async function unmount() {
  app?.$destroy();
}
