import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const addCategoryService = async (props: any) => {

    console.log(JSON.stringify(`CATEGORIA ${JSON.stringify(props)}`))
    const uri = `${uriRelative}admin/category/add`
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
        if (response.ok) {
            console.log("Category successfully update")
        }
    } catch (error) {
        console.error(error);
    }
};