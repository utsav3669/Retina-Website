import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { handleSendInquiryRequest } from './server/sendInquiryHandler.js';
import { handleGoogleReviewsRequest } from './server/googleReviewsHandler.js';

function inquiryApiPlugin() {
  return {
    name: 'inquiry-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/send-inquiry') {
          return handleSendInquiryRequest(req, res);
        }
        if (url === '/api/google-reviews') {
          return handleGoogleReviewsRequest(req, res);
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/send-inquiry') {
          return handleSendInquiryRequest(req, res);
        }
        if (url === '/api/google-reviews') {
          return handleGoogleReviewsRequest(req, res);
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inquiryApiPlugin(),
  ],
});
