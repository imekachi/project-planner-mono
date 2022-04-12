module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
    '../../packages/ui/components/**/*.{js,ts,tsx}',
    '../../packages/ui/index.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
