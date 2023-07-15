import * as Crypto from "expo-crypto";
import { base64ToBinary, binaryToBase64 } from "base64-js";

// Encrypt data using AES encryption
const encryptData = async (data, secretKey) => {
  const key = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    secretKey
  );
  const iv = Crypto.getRandomBytes(16);
  const cipherText = await Crypto.encryptAsync(JSON.stringify(data), key, {
    iv,
    algorithm: Crypto.CryptoEncryptionAlgorithm.AES,
  });
  const encryptedData = binaryToBase64(cipherText);
  const ivString = binaryToBase64(iv);
  return { data: encryptedData, iv: ivString };
};

// Decrypt data using AES decryption
const decryptData = async (encryptedData, secretKey) => {
  const key = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    secretKey
  );
  const iv = base64ToBinary(encryptedData.iv);
  const cipherText = base64ToBinary(encryptedData.data);
  const decryptedData = await Crypto.decryptAsync(cipherText, key, {
    iv,
    algorithm: Crypto.CryptoEncryptionAlgorithm.AES,
  });
  return JSON.parse(decryptedData);
};

export { encryptData, decryptData };
