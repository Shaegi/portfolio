$(window).on('load', function () {
  document.getElementById("loading").style.display="none";
    $('#welcomeText').typeIt({
         strings: ["<span class='typerText webdesign'>Webdesigner</span>", "<span class='typerText artist'>3D-Artist</span>","<span class='typerText programmer'>Video-Editor</span>","<span class='typerText medieninformatiker'>Medieninformatiker.</span>"],
         speed: 100,
         breakLines: false,
         autostart:false
    });
});
