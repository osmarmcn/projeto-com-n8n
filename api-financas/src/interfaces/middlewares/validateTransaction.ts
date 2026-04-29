
export function validateTransaction(req: any, res: any, next: any) {
  const { title, amount, type } = req.body;

  if (!title || !amount || !type) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  next();
}