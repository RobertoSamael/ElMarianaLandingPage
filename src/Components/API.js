
import Axios from 'axios'

export default async function API(setData) {
   
        await Axios.get('https://api.twitch.tv/helix/search/channels?query=MYMTUMTUM69', {
            headers: {
                'Authorization': 'Bearer 92ehv2fykp2pu8n6m0mald3mtjcv81',
                'Client-Id': '01eqr1s11qvh5grj8notxin87jlqow'
            }
        })
        .then(response => {
            setData(response.data.data[0].is_live)
        })
}
