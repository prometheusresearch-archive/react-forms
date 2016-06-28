import {page} from 'sitegen/routing';

export let plugins = ['sitegen-plugin-react-css-components'];

export let route = page('./site/Site', undefined, {
  index: page('./site/Main.md'),
  api: page('./site/API.md'),
});
