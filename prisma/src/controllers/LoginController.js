import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export default {
    async authPassenger(req, res) {
        try {
            const { Email, Senha } = req.body;
            const user = await prisma.passageiro.findUnique({ where: { Email } });
            const isValid = await bcrypt.compare(Senha, user.Senha);
            if (isValid) {
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
                return res.json({ accessToken: accessToken })
            }
            return res.json({ error: "Not allowed" })

        } catch (error) {
            return res.json({ error: message })
        }
    }, 
    authenticateToken(req, res, next){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
} 
}
