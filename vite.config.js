import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Web-Development/" : "/",
  alias:{
    '@' : path.resolve(__dirname, './src')
  },
  plugins: [vue()],
};

// // https://vitejs.dev/config/
// export default defineConfig({
  
//   
//   publicPath: process.env.NODE_ENV === "production" ? "/Web-Development/" : "/",
// })

