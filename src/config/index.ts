
import _ from 'lodash';
let config :any

const mode = process.env.NODE_ENV === 'production' ;


// DEFAULT CONFIG 
const defultConfig = {
    API_URL: "https://youtube.googleapis.com/youtube/v3"
}



// MARGE DEFAULT CONFIG WITH ENV CONFIG
if (mode) {
    config = _.merge(defultConfig, require('./prod.config').config)
}
else {
    config = _.merge(defultConfig, require('./dev.config').config)
}


export default config;