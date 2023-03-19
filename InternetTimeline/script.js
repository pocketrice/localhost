window.addEventListener("load", function() {
    var markerS = []; // The markers themselves
    var markerM = []; // The corresponding slide
    var prevMarker;
    var hasHovered = false;
    var emptyMarker = document.getElementsByClassName("emptyMarker");


    for (let i = 0; i < 20; i++)
    {
        markerS.push(document.getElementById("s"+(i+1)));
        markerM.push(document.getElementById("m"+(i+1)));

        markerS[i].addEventListener("mouseover", function() {
        markerM[i].style.opacity = "1";

// ====== CUT THIS SECTION TO REMOVE PANEL PERSISTENCE =========
        prevMarker = i;

        for (let z = 0; z < 20; z++)
        {
            if (z != i || z != prevMarker)
            {
                markerM[z].style.opacity = "0";
            }
        }


        if (hasHovered == false)
        {
            hasHovered = true; // One-time function
            setTimeout(1000, markerReplace());

        }

// =============================================================

})

// ============= UNCOMMENT THIS TO REMOVE PANEL PERSISTENCE ==========
       /* markerS[i].addEventListener("mouseout", function() {

        markerM[i].style.opacity = "0";
        })*/

// ===================================================================

    }


   function markerReplace()
{
    emptyMarker[0].style.opacity = 0;
    emptyMarker[1].style.opacity = 1;
}



})





