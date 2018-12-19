'use strict';
var express           = global.express;
var path              = global.path;
var os                = global.os;
var fs                = global.fs;
var util              = global.util;
var escpos			  = global.escpos;

var router  = express.Router();

router.use(function(req, res, next) {
    return next();
});


// =============================================================================
// Print
// -----------------------------------------------------------------------------
router.post("/print", async function(req, res){
	console.log("----------- print called --------- ");
  var dtJsonStr = req.body.JsonStr;
  var dtJson = JSON.parse(dtJsonStr);
  console.log(dtJson);

  var device = new escpos.Serial('COM3', { baudRate: 9600, stopBit: 1 } );
  var options = { encoding: "CP949" }
	var printer = new escpos.Printer(device, options);
  device.open(function(err){
    dtJson.forEach(function(index, value){
      var one = index.pickno.substring(0,6);
      var two = index.pickno.substring(6,9);
      var three = index.pickno.substring(9,12);


      printer.align("ct")
      printer.size(3,3)
      printer.text("--------------")
      printer.text(three)
      printer.text("--------------")
      printer.align("lt")
      printer.size(1,1)
      printer.text("픽업번호:"+one+"-"+two+"-"+three)
      printer.text("픽업자:"+index.lo_manager)
      printer.text("주문자:"+index.oname)
      printer.text("수취인:"+index.rname)
      printer.text("주문번호:"+index.ordno)
      printer.barcode(index.pickno, 'CODE39')
      printer.align("ct")
      printer.text("출력일시:"+index.time+"\n")
      printer.cut()
    })
    printer.close();
  });

	// RESULT
	var newRet = {};
		 newRet['result']  = true;
		 newRet['message'] = "Success";
		 newRet['reqdata'] = req.body;
	res.json(newRet);
});
module.exports = router;
