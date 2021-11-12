import * as util from "util";
import * as crypto from "crypto";

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);

const ENC = "base64";

export const createPassword = async (password: string): Promise<string> => {
    const ALGO = "sha512";
    const salt = await randomBytes(32);
    const iter = Math.floor(Math.random() * 20000) + 100000;
    const KEY_LEN = 64;
    const digest = await pbkdf2(password, salt, iter, KEY_LEN, ALGO);
    return `${ALGO}:${salt.toString(ENC)}:${iter}:${KEY_LEN}:${digest.toString(
        ENC,
    )}`;
};

export const verifyPassword = async (
    password: string,
    hashedPassword: string,
) => {
    const [algo, encodedSalt, iterStr, keyLenStr, encodedDigest] =
        hashedPassword.split(":");
    const salt = Buffer.from(encodedSalt, ENC);
    const iter = parseInt(iterStr, 10);
    const keyLen = parseInt(keyLenStr, 10);
    const storedDigest = Buffer.from(encodedDigest, ENC);
    const digest = await pbkdf2(password, salt, iter, keyLen, algo);
    return Buffer.compare(digest, storedDigest) === 0;
};