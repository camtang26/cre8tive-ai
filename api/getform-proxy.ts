// api/getform-proxy.ts
// This serverless function forwards POST requests to Getform.
// (This example is written for deployment on Vercel)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  try {
    // Accumulate the raw request body manually.
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });

    // Log diagnostics: check the Content-Type header and buffered data length
    console.log("Forwarding request to Getform...");
    console.log("Content-Type:", req.headers['content-type']);
    console.log("Buffer length:", buffer.length);

    // Create a Node.js Readable stream from the buffer to preserve multipart boundaries.
    // (Using a custom Readable that pushes the entire buffer in one go)
    const streamBody = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      }
    });
    // Convert the Node.js Readable stream into a Web ReadableStream.
    const webStream = Readable.toWeb(streamBody);

    const options: RequestInit & { duplex?: any } = {
      method: 'POST',
      // Adding duplex option to enable streaming bodies in Node.
      duplex: 'half',
      headers: {
        'Content-Type': req.headers['content-type'] || '',
        'Content-Length': buffer.length.toString(),
      },
      body: webStream,
    };

    const response = await fetch('https://getform.io/f/bzywlpya?token=tg2J6KHgPYeUXYfYcTRdFkCtLYeKgu6CjSlyfwCCgzkyYIj72i3njepH16GP', options as any);

    const text = await response.text();
    console.log("Getform response:", text);
    res.status(response.status).send(text);
  } catch (error: any) {
    console.error('Error in getform-proxy:', error);
    res.status(500).json({ error: error.message });
  }
}