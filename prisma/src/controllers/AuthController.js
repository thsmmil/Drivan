import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let refreshTokens = []
export default{
    async loginPassenger(req, res) {
        try {
            const { Email, Senha } = req.body;
            const user = await prisma.passageiro.findUnique({ where: { Email } });
            const isValid = await bcrypt.compare(Senha, user.Senha);
            if (isValid) {
                const accessToken = generateAccessToken(user)
                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
                refreshTokens.push(refreshToken)
                return res.json({ accessToken: accessToken, refreshToken: refreshToken })
            }
            return res.json({ error: "Not allowed" })

        } catch (error) {
            return res.json({ error: message })
        }
    },
    token(req, res){
        const refreshToken = req.body.token;
        if(refreshToken == null) return res.sendStatus(401);
        if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user ) =>{
            if(err) return res.sendStatus(403);
            const accessToken = generateAccessToken({name: user.Nome})
            return res.json({accessToken: accessToken})
        })
    },
    logout(req, res){
        refreshTokens = refreshTokens.filter(token => token !== req.body.token)
        res.sendStatus(204);
    }
    
}
function generateAccessToken(user){
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15min'})
    }