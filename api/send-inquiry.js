import { handleSendInquiryRequest } from '../server/sendInquiryHandler.js';

export default async function handler(req, res) {
  return handleSendInquiryRequest(req, res);
}
