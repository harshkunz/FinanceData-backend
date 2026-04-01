import { Response } from "express";
import { Prisma } from "@prisma/client";

export const handlePrismaError = (
  error: unknown,
  res: Response
): Response | null => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    
    if (error.code === "P2002") {
      return res.status(400).json({
        success: false,
        msg: "Email already exists",
      });
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        msg: "User not found",
      });
    }
  }

  return null;
};