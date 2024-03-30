import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUserByEmail, verifyUser, verifyUserById } from '../models/users';

const secret = process.env.AUTH_TOKEN_SECRET && process.env.AUTH_TOKEN_SECRET || ''

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = /*req.cookies.accessToken as string ||*/ req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1] as string;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data as jwt.JwtPayload
        const user = verifyUserById(d.id);
        if (!user) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        next();
    });
}

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken as string || req.headers.authorization?.startsWith('Bearer') && req.headers.authorization.split(' ')[1] as string;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, async (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data as jwt.JwtPayload
        const user = await verifyUserById(d.id);
        
        if (user?.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    });
}