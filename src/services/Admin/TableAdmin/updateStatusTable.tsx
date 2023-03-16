import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const updateStatusTableAdmin = async (...props: any) => {
  const uri = `${uriRelative}status/status/update/admin`
  try {
    const response = await fetch(
      uri, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS, DELETE, GET, PUT'
      },
      body: JSON.stringify(props[0]),
    })
    if (response.ok) {
      console.log("Status successfully update")
    }
  } catch (error) {
    console.error(error);
  }
};