function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function relativeLuminance({ r, g, b }) {
  const srgb = [r, g, b].map(v => v / 255).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}
function contrastRatio(hex1, hex2) {
  const L1 = relativeLuminance(hexToRgb(hex1));
  const L2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

const tokens = {
  '--color-background-base': '#FAF7F0',
  '--color-surface': '#FFFFFF',
  '--color-text-primary': '#261814',
  '--color-text-muted': '#6B6B6B',
  '--color-border': '#CFC6B8',
  '--color-accent-heritage': '#8F4F2C',
  '--color-accent-map': '#3B6B73',
  '--color-critical': '#A03A3A',
};

const tests = [
  ['--color-text-primary', '--color-background-base'],
  ['--color-text-primary', '--color-surface'],
  ['--color-text-muted', '--color-background-base'],
  ['--color-accent-heritage', '--color-background-base'],
  ['--color-accent-map', '--color-background-base'],
  ['--color-critical', '--color-background-base'],
];

console.log('Contrast report (ratio):');
for (const [a, b] of tests) {
  const ratio = contrastRatio(tokens[a], tokens[b]);
  console.log(`${a} (${tokens[a]}) on ${b} (${tokens[b]}): ${ratio.toFixed(2)}:1`);
}

console.log('\nAll ratios should be >= 4.5 for AA normal text.');

module.exports = { contrastRatio };
