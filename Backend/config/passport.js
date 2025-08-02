const {Strategy}= require("passport-local");
const bcrypt = require("bcryptjs");
const User = require("../model/users.js");

function initializePassport(passport){
    passport.use(
        new Strategy({usernameField:"email"}, async (email,password,done)=>{
            try{
                const user = await User.findOne({email});

                if(!user){
                    return done(null, false,{message:"No user found with this email"});
                }

                const isMatch = await bcrypt.compare(password,user.password);
                if(!isMatch){
                    return done(null,false,{message:"Incorrect password"})
                }

                return done(null,user);

            }catch(err){
                return done(err);
            }
        })
    )


    passport.serializeUser((user,done)=>done(null,user.id));

    passport.deserializeUser(async(id,done)=>{
        try{
            const user = await User.findById(id);
            done(null,user);
        }catch(err){
            done(err);
        }
    });
};

module.exports=initializePassport;