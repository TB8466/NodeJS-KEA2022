import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "hunter12";
const hashedPass = "$2b$12$cGxXO.nYLTTYhdkNxby3Be2Un/VJAIlRBecO/AAs/LR/FMPJ5HREi";//This is only for testing purpose

async function handlePasswords(){
    const hash = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hash);

    const isSame = await bcrypt.compare(plaintextPassword,hashedPass)
    console.log(isSame)
};

handlePasswords();

export default {};