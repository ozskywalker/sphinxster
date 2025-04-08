# Sphinx-ster

Check it out here -> [https://lwalker.me/sphinxster/index.html](https://lwalker.me/sphinxster/index.html)

## Dev test

- ```npm run dev```

## Build

1. ```npm build```
2. ```cd dist/```
3. ```aws s3 sync . s3://lwalker.me-landingpage/sphinxster/```

NB: subdirectory is defined via ```.env``` & ```vite.config.js```

## Tech stack

- Claude
- React
- Vine
- Tailwindcss