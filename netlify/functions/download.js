// netlify/functions/download.js
exports.handler = async (event, context) => {
  // Ukuran file: 10 MB = 10 * 1024 * 1024 byte
  const size = 10 * 1024 * 1024;
  
  // Buat buffer dummy (semua byte = 0)
  const buffer = Buffer.alloc(size, 0);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': size.toString(),
      'Cache-Control': 'no-store'
    },
    body: buffer.toString('base64'),
    isBase64Encoded: true
  };
};
