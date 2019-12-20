import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: '1203f3644ccf51cf7dcc6a67ff24234070589c1d2fb70ba07a09baff521c533f' });

const searchUnsplash = phrase => {
  return unsplash.search
    .photos(phrase, 1, 10, { orientation: 'portrait' })
    .then(toJson)
    .then(json => {
      return json.results;
    });
};

export default searchUnsplash;
