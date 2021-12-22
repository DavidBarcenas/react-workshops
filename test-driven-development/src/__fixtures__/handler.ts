import type { DefaultRequestBody } from 'msw/lib/types/handlers/RequestHandler';
import type {
  RestContext,
  RestRequest,
} from 'msw/lib/types/handlers/RestHandler';
import type { ResponseComposition } from 'msw/lib/types/response';
import { rest } from 'msw';
import { OK_STATUS, UNAUTHORIZED_STATUS } from '../consts/httpStatus';
import { getReposPerPage, makeFakeResponse } from './repos';

type Login = { email: string; password: string };

export const handlerPaginated = (
  req: RestRequest<never>,
  res: ResponseComposition<DefaultRequestBody>,
  ctx: RestContext,
) => {
  return res(
    ctx.status(OK_STATUS),
    ctx.json({
      ...makeFakeResponse(100),
      items: getReposPerPage(
        Number(req.url.searchParams.get('page')),
        Number(req.url.searchParams.get('per_page')),
      ),
    }),
  );
};

export const handlerLogin = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200));
  }),
];

export const handlerInvalidCredentials = (emailParam: string, passwordParam: string, message: string) => {
  return rest.post<Login>('/login', (req, res, ctx) => {
    const { email, password } = req.body;

    if (email === emailParam && password === passwordParam) {
      return res(ctx.status(UNAUTHORIZED_STATUS), ctx.json({ message }));
    }

    res(ctx.status(OK_STATUS));
  })
}