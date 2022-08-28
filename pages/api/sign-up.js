export default async function handler(req, res) {
  const body = req.body
  if (!body.email) {
    return res.status(400).json({
      error: 'Email not found',
    })
  }
  res.redirect(302, '/')
}
