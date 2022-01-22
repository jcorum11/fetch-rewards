import { rest } from 'msw'

export const handlers = [
  rest.get('https://frontend-take-home.fetchrewards.com/form', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(['John Smith']), ctx.delay(150))
  })
]
