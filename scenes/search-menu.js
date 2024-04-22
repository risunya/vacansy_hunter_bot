const { getData } = require("../services/getapi");

const vacancies = (ctx, city,exp,pagenumber) => {
    pagenumber = 0;
    getData(ctx, city,exp,pagenumber)
}

module.exports = {
    vacancies,
}