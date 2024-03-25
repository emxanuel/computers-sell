import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUserByEmail, verifyUser } from '../models/users';

const secret = process.env.AUTH_TOKEN_SECRET && process.env.AUTH_TOKEN_SECRET || ''

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data as jwt.JwtPayload
        if (!d.email || !d.password) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        if (!d){
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    });
}

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secret, async (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const d = data as jwt.JwtPayload
        const user = await verifyUser(d.email, d.password);
        
        if (user?.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    });
}