/**
 * word count utility, coded as an asynchronous action for pedagogical
 * purposes
 */
function wc(params, resolve) {
    var str = params.payload;
    var words = str.split(" ");
    var count = words.length;
    console.log("The message '"+str+"' has", count, 'words');
    resolve({count: count});
}

function main(params) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            wc(params, resolve);
        }, 100);
    })
}
