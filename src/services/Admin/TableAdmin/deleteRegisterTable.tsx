import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const deleteTableRegister = async (...props: any) => {
    const uri = `${uriRelative}admin/table/delete`
    try {
        const response = await fetch(
            uri, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS, DELETE, GET'
            },
            body: JSON.stringify(props[0]),
        })
        if (response.ok) {
            console.log("Successfully deleted item")
        }
    } catch (error) {
        console.error(error);
    }
}