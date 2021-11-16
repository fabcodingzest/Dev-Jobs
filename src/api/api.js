const getData = async (id) => {
  const res = await fetch(`https://v1.nocodeapi.com/fab/google_sheets/ujOmDEDtkhVDvVGS?tabId=Sheet1&${id ? `row_id=${id}` : ''}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  if (id) return data;
  return data.data;
};
export default getData;
