const {checkA11y, injectAxe} = require('axe-playwright')

module.exports = {
    async preRender(page){
        await injectAxe(page)
    },

    async postRender(page){
        await checkA11y(page,'#root', {
            detailReport: true,
            detailReportOptions:{
                html: true,
            }
        })
    }
}