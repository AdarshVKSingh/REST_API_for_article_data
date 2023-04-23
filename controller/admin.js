const Detail = require('./../model/detail');

exports.getData = (req, res, next) => {

    Detail.find().
        then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        })
}

exports.getSectorData = (req, res, next) => {

    const sector = req.params['sector'];
    //console.log(sector.substring(1));
    Detail.find({ sector: sector.substring(1) }).
        then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        })
}

exports.getPestalData = (req, res, next) => {

    const pestle = req.params['pestle'];
    console.log(pestle.substring(1));
    Detail.find({ pestle: pestle.substring(1) }).
        then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        })
}

exports.getParameter = (req, res, next) => {

    let parameter = req.params['para'];
    parameter = parameter.substring(1);

    console.log(parameter);
    Detail.find({}, parameter).select(parameter)
        .then(docs => {
            //const values = docs.map(doc => doc.parameter);
            //console.log(values);
            res.json(docs);
        })
        .catch(err => {
            console.log(err);
        });
}

