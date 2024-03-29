import { relativeURI } from '../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const getLoginUserAdmin = async (...props: any) => {
    const uri = `${uriRelative}admin`
    try {
        const response = await fetch(
            uri, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS, DELETE, GET'
            },
            body: JSON.stringify(props[0]),
        })
        const jsonObj = await response.json();
        return jsonObj
    } catch (error) {
        console.error(error);
    }
}