import { RenderMode, ServerRoute } from '@angular/ssr';
import path from 'path';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [{ id: '1' }]; // Replace with real blog post IDs
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
