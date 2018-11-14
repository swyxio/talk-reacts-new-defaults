export const getList = ({ delay = 0, id = 0 }) =>
  fetch(`/.netlify/functions/list?delay=${delay}&id=${id}`).then(response =>
    response.json()
  );

export const getInfo = ({ delay = 0, id = 0 }) =>
  fetch(`/.netlify/functions/info?delay=${delay}&id=${id}`).then(response =>
    response.json()
  );
