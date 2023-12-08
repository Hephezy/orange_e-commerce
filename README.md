## Getting Started

First, clone the repository to your local machine:

By running:

```bash
git clone https://github.com/Hephezy/orange_e-commerce.git
```

Then to install all dependencies run:

```bash
npm install 
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Watching the database built with JSON-Server

```bash
json-server --watch db.json
```

Two watch the two endpoints of the database you do that by:

Opening [http://localhost:3000/products](http://localhost:3000/products) with your browser to watch the products database.

or

Opening [http://localhost:3000/categories](http://localhost:3000/categories) with your browser tto watch the category database.
