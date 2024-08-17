// Generation of Secret Key
// `mySuperSecretKey123!@#SecureRandomString0987$%^&*()`
// At least 32 characters is recommended.
import crypto from 'crypto';

const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);
