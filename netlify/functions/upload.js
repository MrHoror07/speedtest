// netlify/functions/upload.js
exports.handler = async (event, context) => {
  // Handle GET (untuk ping test)
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  }

  // Handle POST (upload test)
  if (event.httpMethod === 'POST') {
    // Data dikirim sebagai binary, tapi Netlify Functions menerima sebagai string base64
    // Kita tidak perlu memprosesnya — cukup terima dan kembalikan respons
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    };
  }

  return {
    statusCode: 405,
    body: 'Method not allowed'
  };
};
