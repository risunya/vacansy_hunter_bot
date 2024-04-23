const { getData } = require("../services/getapi");

const vacancies = (ctx, city,expirience,pagenumber) => {
    getData(ctx, city,expirience,pagenumber)
}

const vacanciesNext = (ctx, city,expirience,pagenumber) => {
    if (pagenumberStorage < 100) {
        pagenumberStorage += 1;
        getData(ctx, city,expirience,pagenumberStorage);
    } else {
        getData(ctx, city,expirience,pagenumberStorage);
    }
}

const vacanciesPrev = (ctx, city,expirience,pagenumber) => {
    if (pagenumberStorage > 1) {
        pagenumberStorage -= 1;
        getData(ctx, city,expirience,pagenumberStorage);
    } else {
        getData(ctx, city,expirience,pagenumberStorage);
    }
}

module.exports = {
    vacancies,
    vacanciesNext,
    vacanciesPrev
}