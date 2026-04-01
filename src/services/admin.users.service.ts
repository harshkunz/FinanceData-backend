import { db } from "../config/db";
import { CreateUserBody } from "../types/admin.users.types";

export const createUserService = async (data: CreateUserBody) => {
    const { name, email, password, role } = data;

    // Password Security

    const user = await db.user.create({
        data: {
            name,
            email,
            password: password,
            role
        }
    });

    return user;
}
