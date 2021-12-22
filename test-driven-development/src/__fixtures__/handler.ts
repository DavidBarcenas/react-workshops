import type { DefaultRequestBody } from 'msw/lib/types/handlers/RequestHandler';
import type {
  RestContext,
  RestRequest,
} from 'msw/lib/types/handlers/RestHandler';
import type { ResponseComposition } from 'msw/lib/types/response';
import { rest } from 'msw';
import { OK_STATUS } from '../consts/httpStatus';
import { getReposPerPage, makeFakeResponse } from './repos';

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