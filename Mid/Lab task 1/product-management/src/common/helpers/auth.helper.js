


export const getCurrentUser = (req) => {
  if (!req.user) return "You are not authenticated";

  const { id } = req.user ;

  if (!id) return "Invalid token";

  return req.user;
};
