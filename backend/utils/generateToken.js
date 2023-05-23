import jwt from 'jsonwebtoken'

// created token with user id and jwt secret
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

  // saves token in cookies
  res.cookie('accessToken', token, {
    httpOnly: false,
    secure: process.env.NODE_ENV !== 'development',
    samesite: 'strict',
    maxAge: 60 * 60 * 1000,
  })
}

export default generateToken
