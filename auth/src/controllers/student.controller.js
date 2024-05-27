import { asyncHandler } from "../utils/asyncHandler";

export const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});
