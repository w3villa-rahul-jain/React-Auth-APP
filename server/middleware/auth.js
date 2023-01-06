import pkg from "jsonwebtoken";
import ENV from "../router/config.js";

const jwt = pkg;

export default async function Auth(req, res, next) {
  try {
    const token = req.headers.authorization.split("")[1];
    const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);
    req.user = decodedToken;
    res.json(decodedToken);
    next();
  } catch (error) {
    res.status(401).send({ error: "Authentication Failed" });
  }
}



export function localVariables(req, res, next){
  req.app.locals = {
    OTP : null,
    resetSession : false
  }
  next()
}