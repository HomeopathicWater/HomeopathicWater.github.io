
$("#listFilter").keyup(
    function() {
        
        filter(this);
    }    
);

function hasWord(target,fltr) {
    return target.toLowerCase().search(fltr.toLowerCase()) > -1;
}

function filter(element) {
    var value = $(element).val();
    console.log(value);
    var filters = value.split(",");
    
    $("#theList > li").each(function(key,obj) {
        var b = true;
        $.each(filters, function(idx,val) {
            //console.log(val);
            b = b & hasWord($(obj).text(),val);
        });
        
        if (b) {
            $(this).show();
        } else {
            $(this).hide();
        }
        /*
        if ($(this).text().toLowerCase().search(value.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
        */
    });
}