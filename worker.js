import { onRequest as leaderboard } from './functions/api/leaderboard.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/leaderboard') {
      return leaderboard({ request, env, ctx });
    }
    return env.ASSETS.fetch(request);
  }
};
