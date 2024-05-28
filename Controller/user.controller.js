import prisma from '../DB/db.config.js'

// note that im creating a really primitive API here, the sole purpose of it is to cover Prisma in detail

export const createUser=async(req,res)=>{
    const {name, email , password} = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(findUser){
        return res.status(400).json({message: "Email already taken. Can't create this user!"})

    }
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
    
    return res.status(200).json({data: newUser, message: "User created"});
}

export const updateUser= async(req,res)=>{
    const {id: userId} = req.params;

    const {name, email , password } = req.body;

   const updatedData= await prisma.user.update({
        where:{
            id: Number(userId),
        },

        data: {
            name,
            email,
            password
        }
    })

    res.status(200).json({data: updatedData, message : "Data updated successfully!"})
}