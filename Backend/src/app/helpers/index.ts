require("dotenv").config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

export class Crypt {
  generateHash(pwd: string) {
    const hash = bcrypt.hashSync(pwd, 10);
    return hash;
  }
  async compareHash(password: string, hash: string) {
    const isApproved = await bcrypt.compare(password, hash);
    return isApproved;
  }
  async generateToken(token: string) {
    return await jwt.sign(token, secret);
  }
  async verify(token: string): Promise<boolean> {
    try {
      const isValid = await jwt.verify(token, secret);
      if (!!isValid) return true;
      return false;
    } catch (error) {
      return false;
    }
  }
}