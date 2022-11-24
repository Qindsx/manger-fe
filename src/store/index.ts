import { createPinia } from 'pinia';
import { useUserStore } from './modules/user';

// pinia 插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useUserStore };
export default pinia;
