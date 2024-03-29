import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const getAllScheduleApointments = async (...props: any) => {
    const uri = `${uriRelative}admin/table/schedule`
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
            body: JSON.stringify(props),
        })
        const jsonObj = await Promise.resolve(response.json())
        return jsonObj
    } catch (error) {
        console.error(error);
    }
}