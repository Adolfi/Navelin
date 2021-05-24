var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


$(function () {

    $(".gallery:first").addClass("selectedmenu");

    $(".gallery").click(function() {

        $(".selectedmenu").removeClass("selectedmenu");
        $(this).addClass("selectedmenu");
        var galleriId = $(this).attr("data-id");
        var timestamp = new Date().getMilliseconds();
        
        

        $.ajax({
            url: '/Home/GetGallery/',
            type: 'GET',
            cache: false,
            beforeSend: function () {
                $(".albumcon").html("");
                $(".loader").show();
            },
            complete: function () {
                $(".loader").hide();
            },
            data: { 'galleryid': galleriId, 'timestamp': timestamp },
            success: function(result) {
                $(".albumcon").html(result);
                $(".fancy-img").css({ "opacity": "0" });
               
                $(".fancy-img").each(function(i) {
                    $(this).delay(i*100).animate({ "opacity": "1" }, 500);
                });
            }
        });
    });

    $("#instagram-click").click(function () {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        var timestamp = new Date().getMilliseconds();

        $.ajax({
            url: '/Home/Instagram/',
            type: 'GET',
            cache: false,
            data: { 'timestamp': timestamp },
            success: function (result) {
                $(".albumcon").html(result);
            }
        });
    });

});

}
/*
     FILE ARCHIVED ON 19:21:35 Aug 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:50:24 May 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1114.307
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.098
  RedisCDXSource: 1.869
  esindex: 0.009
  LoadShardBlock: 1095.961 (3)
  PetaboxLoader3.datanode: 1253.392 (5)
  CDXLines.iter: 14.05 (3)
  PetaboxLoader3.resolve: 111.769 (3)
  load_resource: 425.383 (2)
*/