module.exports = {
    extends: ['next/core-web-vitals'],
    plugins: ['boundaries'],
    settings: {
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/**' },
        { type: 'entities', pattern: 'src/entities/**' },
        { type: 'features', pattern: 'src/features/**' },
        { type: 'widgets', pattern: 'src/widgets/**' },
        { type: 'app', pattern: 'src/app/**' }
      ]
    },
    rules: {
      'boundaries/element-types': [2, {
        default: 'disallow',
        rules: [
          { from: 'shared', allow: ['shared'] },
          { from: 'entities', allow: ['shared', 'entities'] },
          { from: 'features', allow: ['shared', 'entities', 'features'] },
          { from: 'widgets', allow: ['shared', 'entities', 'features', 'widgets'] },
          { from: 'app', allow: ['shared', 'entities', 'features', 'widgets', 'app'] }
        ]
      }]
    }
  };
  