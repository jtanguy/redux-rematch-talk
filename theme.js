// @format
import theme from 'mdx-deck/themes';
import prismStyle from 'react-syntax-highlighter/styles/prism/duotone-light';

export default {
  ...theme,
  font: "'Futura Md BT', 'Average Sans', sans-serif",
  monospace: "'Source Code Pro', monospace",
  colors: {
    ...theme.colors,
    background: '#ededed',
    link: '#0b7678',
    text: '#494949',
    heading: '#0F505D',
    code: '#494949',
  },
  codeSurfer: {
    plain: {
      backgroundColor: '#ededed',
      color: '#494949',
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
        style: {
          color: '#878786',
        },
      },
      {
        types: ['namespace'],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ['tag', 'operator', 'number'],
        style: {
          color: '#063289',
        },
      },
      {
        types: ['property', 'function'],
        style: {
          color: '#b29762',
        },
      },
      {
        types: ['tag-id', 'selector', 'atrule-id'],
        style: {
          color: '#2d2006',
        },
      },
      {
        types: ['attr-name'],
        style: {
          color: '#896724',
        },
      },
      {
        types: [
          'boolean',
          'string',
          'entity',
          'url',
          'attr-value',
          'keyword',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'at-rule',
        ],
        style: {
          color: '#728fcb',
        },
      },
      {
        types: ['placeholder', 'variable'],
        style: {
          color: '#93abdc',
        },
      },
      {
        types: ['deleted'],
        style: {
          textDecorationLine: 'line-through',
        },
      },
      {
        types: ['inserted'],
        style: {
          textDecorationLine: 'underline',
        },
      },
      {
        types: ['italic'],
        style: {
          fontStyle: 'italic',
        },
      },
      {
        types: ['important', 'bold'],
        style: {
          fontWeight: 'bold',
        },
      },
      {
        types: ['important'],
        style: {
          color: '#ed344e',
        },
      },
    ],
    showNumbers: true,
  },

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
