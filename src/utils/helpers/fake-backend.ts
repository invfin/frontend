export { fakeBackend };
import type { User } from '@/interfaces';

interface UserDb {
  username: string;
  password: string;
}

interface ResponseBody {
  username: string;
  token: string;
}

function fakeBackend() {
  const users: UserDb[] = [{ username: 'info@codedthemes.com', password: 'admin123' }];
  const realFetch = window.fetch;

  window.fetch = function (url: string, opts: { method: string; headers: { [key: string]: string }; body?: string }) {
    return new Promise<Response>((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && opts.method === 'POST':
            return authenticate();
          case url.endsWith('/users') && opts.method === 'GET':
            return getUsers();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions
      function authenticate() {
        const { username, password } = body();
        const user = users.find((x) => x.username === username && x.password === password);
        if (!user) return error('Username or password is incorrect');
        return ok({
          username: user.username,
          token: 'fake-jwt-token'
        });
      }

      function getUsers() {
        if (!isAuthenticated()) return unauthorized();
        return ok([
          {
            username: 'info@codedthemes.com',
            token: 'admin123',
            anonymous: false,
            image: 'src/assets/images/images/avatars/inversorinteligente.webp'
          }
        ]);
      }

      // helper functions
      function ok(body: User[] | ResponseBody): void {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) } as Response);
      }

      function unauthorized() {
        resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) } as Response);
      }

      function error(message: string) {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) } as Response);
      }

      function isAuthenticated() {
        // TODO: implement login logic
        return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }
    });
  } as typeof window.fetch; // Type assertion here
}
