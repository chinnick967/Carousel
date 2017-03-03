var json = [{"game":"ava",
  "image_url":"https://static.enmasse.com/images/AVA/gumballs/Store_Carousel_default.png",
  "tagline":"For Sale",
  "body":"New Items in the store",
  "link_url":"",
  "position":20},
  {"game":"ava",
  "image_url":"https://static.enmasse.com/images/AVA/gumballs/Store_Carosal_bf.jpg",
  "tagline":"Black Friday Sale",
  "body":"<i>AVA</i>",
  "link_url":"",
  "position":10},
 {"game":"ava",
 "image_url":"https://static.enmasse.com/images/AVA/gumballs/Store_Carosal_Halloween.png",
 "tagline":"Spooky Discounts",
 "body":"ava wants you to have this",
 "link_url":"http://support.enmasse.com/tickets/submit",
 "position":40}];

var currentAnnouncement = 0;

window.onload = function() {

    document.getElementById("arrow-left").onclick = function(){goToAnnouncement(--currentAnnouncement);}
    document.getElementById("arrow-right").onclick = function(){goToAnnouncement(++currentAnnouncement);}

    json.sort(function(a, b) {
        return a.position - b.position;
    });

    json.forEach(function(announcement, index) {

        var content = document.getElementById("content");
        content.innerHTML += "<a href=" + checkForLink(announcement) + "><div id='Announcement" + index + "' class='announcement'><img class='announcement-img' alt='" + announcement.tagline + "' src='" + announcement.image_url + "' /><div class='announcement-body'><div class='text'>" + announcement.body + "</div></div></div></a>";

        var pagination = document.getElementById("dots");
        pagination.innerHTML += "<div onclick='goToAnnouncement(" + index + ")' class='select-dot'></div>";

    });

    goToAnnouncement(0); // just to set the selected to the first dot

}

function goToAnnouncement(index) {
    
        currentAnnouncement = index;
        var left = currentAnnouncement * 1018 * -1;
        
        var announcements = document.getElementsByClassName('announcement');
        for (var i = 0; i < announcements.length; i++) {
            announcements[i].style.left = left + "px";
        }

        if (currentAnnouncement == announcements.length - 1) {
            document.getElementById("arrow-right").style.opacity = ".3";
            document.getElementById("arrow-right").style.pointerEvents = "none";
        } else {
            document.getElementById("arrow-right").style.opacity = "1";
            document.getElementById("arrow-right").style.pointerEvents = "auto";
        }
        
        if (currentAnnouncement == 0) {
            document.getElementById("arrow-left").style.opacity = ".3";
            document.getElementById("arrow-left").style.pointerEvents = "none";
        } else {
            document.getElementById("arrow-left").style.opacity = "1";
            document.getElementById("arrow-left").style.pointerEvents = "auto";
        }

        var selectDots = document.getElementsByClassName('select-dot');
        for (var i = 0; i < announcements.length; i++) {
            selectDots[i].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }
        selectDots[currentAnnouncement].style.backgroundColor = "#00C3FF";
    }

function checkForLink(announcement) {
    if (announcement.link_url != "") {
        return announcement.link_url;
    } else {
        return "javascript:void(0)";
    }
}