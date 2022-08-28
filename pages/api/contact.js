export default async function handler(req, res) {
  const body = req.body
  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({
      error: 'One or more of the following not found: name, email, message',
    })
  }
  res.redirect(302, '/')
}
