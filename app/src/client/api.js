export const getList = ({ delay = 0, id = 0 }) =>
  fetch(`/.netlify/functions/list?delay=${delay}&id=${id}`).then(response =>
    response.json()
  );

export const getInfo = props => {
  // have to take strings for react-cache's benefit
  const { delay = 0, id = 0 } =
    typeof props === 'string' ? JSON.parse(props) : props;
  return fetch(`/.netlify/functions/info?delay=${delay}&id=${id}`).then(
    response => response.json()
  );
};
