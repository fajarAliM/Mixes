# Cassette Tapes

## How to use

```bash
git clone https://github.com/Mamaduka/tapes.git
cd tapes
yarn
yarn dev
```

To access Spotify API, you'll need Client ID, Client Secret, and [Refresh Token](https://benwiz.com/blog/create-spotify-refresh-token/). Once you have them, copy the `.env.local.example` file in the root directory to `.env.local` (this is ignored by Git).

```bash
cp .env.local.example .env.local
```

Then update with your credentials.
