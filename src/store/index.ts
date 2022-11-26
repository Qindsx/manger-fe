import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';
import { useSidebarStore } from './modules/sidebar';

// pinia 插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useUserStore, useSidebarStore };
export default pinia;
