import jwt from "jsonwebtoken";
import ENV from "../router/config.js";

export default async function Auth(req, res, next) {
  try {
    const token = req.headers.authorization.split("")[1];
    const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);
    console.log(decodedToken);
    req.user = decodedToken;
    res.json(decodedToken);
    next();
  } catch (error) {
    res.status(401).send({ error: "Authentication Failed" });
  }
}
