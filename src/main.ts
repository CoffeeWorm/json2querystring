import { createApp } from 'vue';
import pinia from './store';
import App from './App.vue';
import 'element-plus/theme-chalk/index.css';

const render = (container: Element | Document = document, id = '#app') => {
  const node: Element | null | undefined = container.querySelector(id);  
  if (!node) throw new Error(`Can not find the ${container} element!`);
  const app = createApp(App);
  app.use(pinia);
  app.mount(node);
  return app;
};

if (!window.__POWERED_BY_QIANKUN__) render();

let app: ReturnType<typeof render> | null = null;

export async function bootstrap() {}

export async function mount({ container }: Record<string, any>) {
  app = render(container);
}

export async function unmount() {
  app?.unmount();
}
