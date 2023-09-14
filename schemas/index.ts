import account from "./account";
import comment from "./objects/comment";
import post from "./post";
import userRef from "./references/userRef";
import postRef from "./references/postRef";
import user from "./user";
import verification_token from "./verification_token";

import connections from "./connections";
import assets from './assets'
import chat from './chat'
import like from "./objects/like";
export const schemaTypes = [like,assets,user,account,verification_token,post,comment,postRef,userRef,connections,chat]
