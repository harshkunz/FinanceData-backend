
export type Role = "ADMIN" | "ANALYST" | "VIEWER";
export type Status = "ACTIVE" | "INACTIVE";

// Request<Params, ResBody, ReqBody, Query>

export interface CreateUserBody {
  name: string;
  email: string;
  password: string;
  role: Role;
  status: Status
}

export interface UpdateRoleBody {
  role: Role;
}

export type CreateUserResponse = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: Status
}