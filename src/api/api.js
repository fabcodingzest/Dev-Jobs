const getData = async () => {
  const res = await fetch('https://v1.nocodeapi.com/fab/google_sheets/ujOmDEDtkhVDvVGS?tabId=Sheet1', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  return data.data;
};
export default getData;
