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
exports.hillstations_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hillstations.findById( req.params.id).exec()
        // Do updates of properties
        if(req.body.material_type) toUpdate.location = req.body.location;
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.maxtemperature) toUpdate.maxtemperature = req.body.maxtemperature;
        let result = await toUpdate.save()  ;
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};
 
// List of all hillstationss
exports.hillstations_list = async function(req, res) {
    try{
    thehillstationss = await hillstations.find();
    res.send(thehillstationss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
    //VIEWS
    // Handle a show all view
    exports.hillstations_view_all_Page = async function(req, res) {
    try{
    thehillstationss = await hillstations.find();
    res.render('hillstation', { title: 'hillstations Search Results', results: thehillstationss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };