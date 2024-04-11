var hillstations = require('../models/hillstations');
// List of all hillstationss
exports.hillstations_list = function(req, res) {
 res.send('NOT IMPLEMENTED: hillstations list');
};
// for a specific hillstations.
exports.hillstations_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await hillstations.findById( req.params.id).exec()
    console.log(result);
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle hillstations create on POST.
exports.hillstations_create_post = async function(req, res) {
    console.log(req.body)
    let document = new hillstations();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.location = req.body.location;
    document.name = req.body.name;
    document.maxtemperature = req.body.maxtemperature;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
// Handle hillstations delete from on DELETE.
exports.hillstations_delete = async function(req, res) {
    try {
        await hillstations.findByIdAndDelete(req.params.id);
        res.json({ message: 'hillstations item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Handle hillstations update form on PUT.
exports.hillstations_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hillstations.findById(req.params.id)
        // Do updates of properties
        if (req.body.location)
            toUpdate.location = req.body.location;
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.maxtemperature) toUpdate.maxtemperature = req.body.maxtemperature;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};
// List of all hillstationss
exports.hillstations_list = async function(req, res) {
    try{
    thehillstations = await hillstations.find();
    res.send(thehillstations);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
    // Handle Costume delete on DELETE.
    exports.hillstations_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await hillstations.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    // Handle a show one view with id specified by query
exports.hillstations_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await hillstations.findById( req.query.id)
    res.render('hillstationsdetail',
    { title: 'hillstations Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a hillstations.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hillstations_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('hillstationscreate', { title: 'hillstations Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a hillstations.
// query provides the id
exports.hillstations_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await hillstations.findById(req.query.id)
    console.log('result',result)
    res.render('hillstationsupdate', { title: 'hillstations Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle a delete one view with id from query
exports.hillstations_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await hillstations.findById(req.query.id)
    res.render('hillstationsdelete', { title: 'hillstations Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //VIEWS
    // Handle a show all view
    exports.hillstations_view_all_Page = async function(req, res) {
    try{
    thehillstations = await hillstations.find();
    res.render('hillstation', { title: 'hillstations Search Results', results: thehillstations });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };