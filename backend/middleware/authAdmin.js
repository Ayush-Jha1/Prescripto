import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const atoken = req.headers.atoken || req.headers.aToken
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        console.log('Decoded token:', token_decode)
        console.log('Expected:', process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            console.log('Token mismatch - decoded:', typeof token_decode, token_decode)
            console.log('Expected value:', typeof (process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD), process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        next()
    } catch (error) {
        console.log('JWT Error:', error.message)
        if (error.name === 'JsonWebTokenError') {
            return res.json({ success: false, message: 'Invalid token. Please login again.' })
        }
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;