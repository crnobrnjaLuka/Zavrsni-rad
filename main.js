        var homePage = document.querySelector("#homePage");
        if( homePage) {
            console.log("naslovna");
            var sl=1;
		    var menjajSlikeInterval = setInterval(function(){
                //document.querySelector('.sl_ucitavanje').style.display = "none";
                document.querySelector(".sl").classList.remove("sl"+sl);
                sl++;
                if(sl>4) sl=1;
                document.querySelector(".sl").classList.add("sl"+sl);
            }, 4000);
            let sliderImages = document.querySelector(".sl");
            let arrowLeft = document.querySelector("#arrow-left");
            let arrowRight = document.querySelector("#arrow-right");
            arrowLeft.addEventListener("click", function () {
                    document.querySelector(".sl").classList.remove("sl" + sl);
                sl--;
                if (sl < 1) sl = 4;
                document.querySelector(".sl").classList.add("sl" + sl);
            // clearInterval(menjajSlikeInterval);           
            });
            arrowRight.addEventListener("click", function () {
                    document.querySelector(".sl").classList.remove("sl" + sl);
                sl++;
                if (sl > 4) sl = 1;
                document.querySelector(".sl").classList.add("sl" + sl);
            // clearInterval(menjajSlikeInterval);
            });
        }

        let menuButton = document.getElementById("menuButton");
        let menu = document.getElementById("menu");
        let logo = document.getElementById("logo");
        let cakes = document.getElementById("cakesGalleryContainer");
        let about = document.getElementById("aboutGalleryContainer");
        let footer = document.querySelector("footer");
        let decorations = document.getElementById("decorationsGalleryContainer");

        function showMenu() {
            if (menu.style.display === "none") {
                menu.style.display = "block";
                logo.style.display = "none";
                // about.style.display = "none";
                cakes.style.display = "none";
                footer.style.display = "none";
                decorations.style.display = "none";
            } else {
                menu.style.display = "none";
                logo.style.display = "inline-block";
            }
        }

        menuButton.onclick = function() {
            showMenu();
        }
    
        var opacity = document.querySelector(".opacity");
        var gallery = document.querySelector(".gallery");
        var close = document.querySelector(".gallery .close");

        var svadbene = document.querySelector(".svadbene");
        var rodjendanske = document.querySelector(".rodjendanske");
        var deserti = document.querySelector(".deserti");
        var sitni = document.querySelector(".sitni");

        svadbene.onclick = function () {
            if (opacity.style.display === "none") {
                opacity.style.display = "block";
                gallery.style.display = "block";
                svaLeft.style.display = "block";
                svaRight.style.display = "block";
                document.querySelector(".svadbene.gl").style.display = "block";
            } else  {
                opacity.style.display = "none";
                gallery.style.display = "none";
                svaLeft.style.display = "none";
                svaRight.style.display = "none";
                document.querySelector(".svadbene.gl").style.display = "none";
            }
        }
        rodjendanske.onclick = function () {
            if (opacity.style.display === "none") {
                opacity.style.display = "block";
                gallery.style.display = "block";
                rodjLeft.style.display = "block";
                rodjRight.style.display = "block";
                document.querySelector(".rodjendanske.gl").style.display = "block";
            } else  {
                opacity.style.display = "none";
                gallery.style.display = "none";
                rodjLeft.style.display = "none";
                rodjRight.style.display = "none";
                document.querySelector(".rodjendanske.gl").style.display = "none";
            }
        }
        deserti.onclick = function () {
            if (opacity.style.display === "none") {
                opacity.style.display = "block";
                gallery.style.display = "block";
                desLeft.style.display = "block";
                desRight.style.display = "block";
                document.querySelector(".deserti.gl").style.display = "block";
            } else  {
                opacity.style.display = "none";
                gallery.style.display = "none";
                desLeft.style.display = "none";
                desRight.style.display = "none";
                document.querySelector(".deserti.gl").style.display = "none";
            }
        }
        sitni.onclick = function () {
            if (opacity.style.display === "none") {
                opacity.style.display = "block";
                gallery.style.display = "block";
                sitLeft.style.display = "block";
                sitRight.style.display = "block";
                document.querySelector(".sitni.gl").style.display = "block";
            } else  {
                opacity.style.display = "none";
                gallery.style.display = "none";
                sitLeft.style.display = "none";
                sitRight.style.display = "none";
                document.querySelector(".sitni.gl").style.display = "none";
            }
        }

        close.onclick = function () {
            opacity.style.display = "none"
            gallery.style.display = "none";
            svaLeft.style.display = "none";
            svaRight.style.display = "none";
            rodjLeft.style.display = "none";
            rodjRight.style.display = "none";
            desLeft.style.display = "none";
            desRight.style.display = "none";
            sitLeft.style.display = "none";
            sitRight.style.display = "none";
            document.querySelector(".svadbene.gl").style.display = "none";
            document.querySelector(".rodjendanske.gl").style.display = "none";
            document.querySelector(".deserti.gl").style.display = "none";
            document.querySelector(".sitni.gl").style.display = "none";
        }


        var sva = 1;
        var rodj = 1;
        var des = 1;
        var sit = 1;
        let svaLeft = document.querySelector("#sva-left");
        let svaRight = document.querySelector("#sva-right");
        let rodjLeft = document.querySelector("#rodj-left");
        let rodjRight = document.querySelector("#rodj-right");

        let desLeft = document.querySelector("#des-left");
        let desRight = document.querySelector("#des-right");

        let sitLeft = document.querySelector("#sit-left");
        let sitRight = document.querySelector("#sit-right");
        svaLeft.addEventListener("click", function () {
            document.querySelector(".svadbene.gl").classList.remove("gl" + sva);
            sva--;
            if (sva < 1) sva = 4;
            document.querySelector(".svadbene.gl").classList.add("gl" + sva);
        });
        svaRight.addEventListener("click", function () {
            document.querySelector(".svadbene.gl").classList.remove("gl" + sva);
            sva++;
            if (sva > 4) sva = 1;
            document.querySelector(".svadbene.gl").classList.add("gl" + sva);
        });
        rodjLeft.addEventListener("click", function () {
            document.querySelector(".rodjendanske.gl").classList.remove("gl" + rodj);
            rodj--;
            if (rodj < 1) rodj = 4;
            document.querySelector(".rodjendanske.gl").classList.add("gl" + rodj);
        });
        rodjRight.addEventListener("click", function () {
            document.querySelector(".rodjendanske.gl").classList.remove("gl" + rodj);
            rodj++;
            if (rodj > 4) rodj = 1;
            document.querySelector(".rodjendanske.gl").classList.add("gl" + rodj);
        });

        desLeft.addEventListener("click", function () {
            document.querySelector(".deserti.gl").classList.remove("gl" + des);
            des--;
            if (des < 1) des = 4;
            document.querySelector(".deserti.gl").classList.add("gl" + des);
        });
        desRight.addEventListener("click", function () {
            document.querySelector(".deserti.gl").classList.remove("gl" + des);
            des++;
            if (des > 4) des = 1;
            document.querySelector(".deserti.gl").classList.add("gl" + des);
        });
        sitLeft.addEventListener("click", function () {
            document.querySelector(".sitni.gl").classList.remove("gl" + sit);
            sit--;
            if (sit < 1) sit = 4;
            document.querySelector(".sitni.gl").classList.add("gl" + sit);
        });
        sitRight.addEventListener("click", function () {
            document.querySelector(".sitni.gl").classList.remove("gl" + sit);
            sit++;
            if (sit > 4) sit = 1;
            document.querySelector(".sitni.gl").classList.add("gl" + sit);
        });
    
