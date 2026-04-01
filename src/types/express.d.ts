import { Role } from "./admin.users.types"

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                role: Role;
            }
        }
    }
}