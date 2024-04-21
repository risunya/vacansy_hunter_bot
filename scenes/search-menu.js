const { getData } = require("../services/getapi");

let pagenumber = 0;

const vacancies = (ctx) => {
    getData(ctx, pagenumber)
}

const vacanciesNext = (ctx) => {
    pagenumber = pagenumber + 1;
    getData(ctx, pagenumber )
}

const vacanciesPrev = (ctx) => {
    if (pagenumber>=1) {
        pagenumber = pagenumber - 1;
        getData(ctx, pagenumber )
    } else {
        getData(ctx, 0 )
    }
}

module.exports = {
    vacancies,
    vacanciesNext,
    vacanciesPrev,
}