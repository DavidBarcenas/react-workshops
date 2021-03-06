import type { DefaultRequestBody } from 'msw/lib/types/handlers/RequestHandler';
import type {
  RestContext,
  RestRequest,
} from 'msw/lib/types/handlers/RestHandler';
import type { ResponseComposition } from 'msw/lib/types/response';
import { rest } from 'msw';
import { OK_STATUS, UNAUTHORIZED_STATUS } from '../consts/httpStatus';
import { getReposPerPage, makeFakeResponse } from './repos';
import { ADMIN_ROLE, EMPLOYEE_ROLE } from '../consts/messages';

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
  rest.post<Login>('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    let role = ''
    const {email} = req.body

    if(email === 'admin@mail.com') {
      role = ADMIN_ROLE
    }
   
    if(email === 'employee@mail.com') {
      role = EMPLOYEE_ROLE
    }

    return res(ctx.status(200), ctx.json({user: {role, username: 'daveepro'}}));
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