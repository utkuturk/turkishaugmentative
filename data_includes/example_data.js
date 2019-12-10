var shuffleSequence = seq("practice");

var defaults = [
        "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."},
        "DashedSentence", {mode: "self-paced reading"},
        "Form", {continueOnReturn: true, saveReactionTime: true, hideProgressBar: true},//The reaction time being recorded is the amount it takes for the person to enter the text and hit continue
        "Message", {hideProgressBar: true},
        "sep", {hideProgressBar: true},//honestly, the most important part of defaults besides saving RT is to just hide the progress bar
        "Scale", {scaleLabels: true, scaleWidth:1000, scaleHeight:10, handleWidth:50, handleHeight:15, startValue:1, endValue:10, decimalPlaces:10}
];

var items = [
    
    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],


["practice", "DashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}, "Scale", {html:'<center>This is a practice slider.</center>'}]
    
];    
 
