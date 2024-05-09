const zod = require("zod")

function Validator(obj){
    const userSchema = zod.object({
        email: zod.string().email(),
        password : zod.string().min(8)
    })

    const response = userSchema.safeParse(obj);
    console.log(response)
}

Validator({
    email : "test@gmail.com",
    password : "123445677"
})