import { handleGoogleReviewsRequest } from '../server/googleReviewsHandler.js';

export default async function handler(req, res) {
  return handleGoogleReviewsRequest(req, res);
}
