interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jif089a3u2fi23oj23f098ug32opqjge90ue32wopjf2309u23',
        user: {
          name: 'Erick',
          email: 'erick_martim@hotmail.com'
        }
      })
    }, 1000);
  });
}