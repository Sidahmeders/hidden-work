import eslintPlugin from 'vite-plugin-eslint'

export default {
  plugins: [eslintPlugin({ cache: false })],
  root: 'src',
  build: {
    outDir: '../dist',
  },
}
