import { relativeURI } from '../../../helpers/RelativeURI'
const uriRelative = relativeURI()
export const closeFinalSaleService = async (...props: any) => {
    const uri = `${uriRelative}admin/sale/products/sale`
        try {
            const response = await fetch(
                uri, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS, DELETE, GET'
                },
                body: JSON.stringify(props),
            })
            if (response.ok) {
                console.log("Products successfully sale")
            }
        } catch (error) {
            console.error(error);
        }
}
