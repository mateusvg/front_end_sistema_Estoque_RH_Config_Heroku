import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const updateScheduleApointment = async (...props: any) => {
    const uri = `${uriRelative}admin/table/schedule/date`
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
            console.log("Cliente agendado")
        }
    } catch (error) {
        console.error(error);
    }
}