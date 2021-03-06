const getData = async () => {
  const res = await fetch(process.env.PUBLIC_URL + '/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  return data;
};
export default getData;
