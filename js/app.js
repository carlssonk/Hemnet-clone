// Filter Select
let filterSelect = document.querySelectorAll(".filter-select")
let soldInom = document.querySelectorAll(".sold-inom-labels")
let minimumRooms = document.querySelectorAll(".minimum-rooms-labels")
let tabs = document.querySelectorAll(".tabs")
let flerSokFilter = document.querySelector(".fler-sokfilter")
let locationSearch = document.querySelector("#location-search")
let skrivIn = document.querySelector("#skriv-in-switch")
let searchLocation = document.querySelector(".location")
let findRealEstate = document.querySelector("#findRealEstate")
let moreFilterOptions = document.querySelector(".more-filter-options")
let showFilter = document.querySelector("#show-filter")
let flerSokfilter = document.querySelector(".fler-sokfilter")
let soldInomContainer = document.querySelector(".sold-inom")
let searchButton = document.querySelector(".search-button")
let searchFilterLower = document.querySelector(".search-filter-lower")
let soldInomBox = document.querySelector(".sold-inom-box")
let soldInomBox2 = document.querySelector(".sold-inom-box2")

let showFilterClicked = false;
let tab = 0;

let bool

Init()

function Init() {
  formContainerSwitchClass()
  formContainerModifier()
}

// Form Container Switch CSS Style
function formContainerSwitchClass() {
  tabSwitchStyle()
  filterSwitchStyle()
  minimumRoomsSwitchStyle()
  soldSwitchStyle()
  toggleMagnifyingGlass()
}

// Form Container Add/Remove Content
function formContainerModifier() {
  tabSwitchContent()
  skrivInSwitchContent()
  searchFilterShowContent()
}


function tabSwitchContent() {
  for(i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      // Add/Remove content in Form Container
      if(this === tabs[0]) {
        tab = 0;
        if(showFilterClicked === true) {
          searchFilterLower.classList.remove("hide-element");
          soldInomBox2.classList.add("hide-element");
          document.querySelector("#pris-slutpris").innerText = "Högst pris"
          moreFilterOptions.style.height = "100%"
        } else {
          soldInomContainer.classList.add("hide-element")
          flerSokFilter.classList.remove("hide-element")          
        }
        findRealEstate.innerText = "Hitta bostäder till salu"
      }else if(this === tabs[1]) {
        tab = 1;
        if(showFilterClicked === true) {
          soldInomBox.innerHTML = "";
          soldInomBox2.classList.remove("hide-element")        
          searchFilterLower.classList.add("hide-element");
          document.querySelector("#pris-slutpris").innerText = "Högst slutpris"
          moreFilterOptions.style.transition = "0ms"
          moreFilterOptions.style.height = "100%"
          document.querySelector("#sold-inom-padding").style.paddingBottom = "14px"
        } else {
          if (formQuery === false) {
            flerSokFilter.classList.add("hide-element")
          }
          soldInomContainer.classList.remove("hide-element")          
        }
        findRealEstate.innerText = "Hitta slutpriser"
        
      }
    });
  }
}

function tabSwitchStyle() {
  for(i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      tabs[0].classList.remove("tabs-selected"); tabs[1].classList.remove("tabs-selected")
      this.classList.add("tabs-selected")
    });
  }
}

function skrivInSwitchContent() {
  skrivIn.addEventListener("click", function() {
    bool = !bool;
    if(bool === true) {
      customSearchArea()
    } else {
      regularSearchArea()
    }
  });
}
// Also use these functions to call it when page breaks to 670px
function customSearchArea() {
  document.querySelector(".select-option-box").classList.add("hide-element")
  document.querySelector(".location-search-box").classList.remove("hide-element")
  searchLocation.style.padding = "0";
  skrivIn.innerHTML =
  `
  <i class="fas fa-bars"></i>
  <span><a href="#">Välj i lista</a></span>  
  `        
}
function regularSearchArea() {
  document.querySelector(".select-option-box").classList.remove("hide-element")      
  document.querySelector(".location-search-box").classList.add("hide-element")
  searchLocation.style.padding = "8px 3px 8px 3px";
  skrivIn.innerHTML =
  `
  <i class="fas fa-pencil-alt"></i>
  <span><a href="#">Skriv in</a></span>  
  `        
}


function filterSwitchStyle() {
  for(i = 0; i < filterSelect.length; i++) {
    filterSelect[i].addEventListener("click", function() {
      if(this === filterSelect[0]) {
        // Adds selected to first option and removes selected on all the other options
        this.classList.add("selected")
        filterSelect[1].classList.remove("selected"); filterSelect[2].classList.remove("selected"); filterSelect[3].classList.remove("selected"); filterSelect[4].classList.remove("selected"); filterSelect[5].classList.remove("selected"); filterSelect[6].classList.remove("selected"); filterSelect[7].classList.remove("selected");
      } else {
        // Toggles to all option except for first option
        this.classList.toggle("selected")
        filterSelect[0].classList.remove("selected")
      }
        // Add selected to first option if nothing is selected      
      if(filterSelect[1].classList.contains("selected") || filterSelect[2].classList.contains("selected") || filterSelect[3].classList.contains("selected") || filterSelect[4].classList.contains("selected") || filterSelect[5].classList.contains("selected") || filterSelect[6].classList.contains("selected") || filterSelect[7].classList.contains("selected")) {
        // Do Nothing
      } else {
        filterSelect[0].classList.add("selected")
      }
    });
  }
}

function minimumRoomsSwitchStyle() {
  for(let i = 0; i < minimumRooms.length; i++) {
    minimumRooms[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("rooms-selected");
      current[0].className = current[0].className.replace(" rooms-selected", "");
      this.className += " rooms-selected";

      // Add soft green style to all elements thats higher than current selection
      $(".minimum-rooms-labels").removeClass("rooms-selected-plus") // <-- Removes style before applying new style
      for(let i = $(this).index()+1; i < minimumRooms.length; i++) {
        minimumRooms[i].classList.add("rooms-selected-plus")
      }

      // Removes style if clicked on first
      if ($(this).index() === 0) {
        $(".minimum-rooms-labels").removeClass("rooms-selected-plus")
      }
    });
  }
}


function soldSwitchStyle() {
  for(i = 0; i < soldInom.length; i++) {
    soldInom[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("sold-selected");
      current[0].className = current[0].className.replace(" sold-selected", "");
      this.className += " sold-selected";
    });
  }
}

function searchFilterShowContent() {
  showFilter.addEventListener("click", function() {
    showFilterClicked = true;
    flerSokfilter.style.display = "none"
    searchButton.style.marginTop = "12px"
    moreFilterOptions.style.position = "relative"
    moreFilterOptions.style.height = "100%" 
    moreFilterOptions.style.padding = "12px 0px 0px"
    moreFilterOptions.style.opacity = "1"
    moreFilterOptions.style.overflow = "visible"
    if (formQuery === true) {
      $(".filter").removeClass("hide-element")
    }
    // Modify innerContainer depending on tab 0 or tab 1 is clicked
    if (formQuery === true && tab === 1) {
      console.log("do stuff")
      soldInomBox2.classList.remove("hide-element")        
      searchFilterLower.classList.add("hide-element")
      document.querySelector("#pris-slutpris").innerText = "Högst slutpris"
      document.querySelector("#sold-inom-padding").style.paddingBottom = "14px"
    }
  })
}

function toggleMagnifyingGlass() {
  let magnifyGlass = document.querySelector(".fa-search")
  locationSearch.addEventListener("input", function() {
    if(locationSearch.value.length > 0) {
      magnifyGlass.classList.add("hide")
    } else {
      magnifyGlass.classList.remove("hide")
    }
  });
}

findRealEstate.addEventListener("click", function() {
  alert("Error: This website is not that advanced")
});


// *** Code that is NOT contributing to the form container ;) ***

const mainImages = [
  {
    img: "imgs/interior1.jpg"
  },
  {
    img: "imgs/interior2.jpg"
  },
  {
    img: "imgs/real_estate.jpg"
  },
  {
    img: "imgs/water_reflection.jpg"
  },
]

let randomImg = mainImages[Math.floor(Math.random() * mainImages.length)];
let mainUpper = document.querySelector(".mainUpper")

// Reload page when click on Hemnet logo
document.querySelector("#hemnet-header").addEventListener("click", function() {
  location.reload()
});

// Add custom Bootstrap 4 Navbar breakpoint
function mediaQuery(x840) {
  if (x840.matches) {
    $(".navbar").removeClass("navbar-expand")
    $(".navbar").addClass("navbar-expand-*")
  } else {
    $(".navbar").addClass("navbar-expand")
    $(".navbar").removeClass("navbar-expand-*")
  }
}

let x840 = window.matchMedia("(max-width: 840px)");
mediaQuery(x840);
x840.addListener(mediaQuery);


// Modify form container breakpoint
let formQuery;
function mediaQuery2(x670) {
  if (x670.matches) {
    formQuerySwitchContentMin()
  } else {
    formQuerySwitchContentMax()
    bool = false;
  }
}

let x670 = window.matchMedia("(max-width: 670px)");
mediaQuery2(x670);
x670.addListener(mediaQuery2)


// When page is bigger than 670px switch to this form content
function formQuerySwitchContentMax() {
  mainUpper.style.backgroundImage = "url" + "('" + randomImg.img + "')"
  $(".area").removeClass("hide-element")
  $(".minimum-rooms-max").removeClass("hide-element")
  $(".minimum-rooms-min").addClass("hide-element")
  $(".expandarea").css("width", "50%")
  $(".more-filter-list").css({"width": "", "padding-left": ""})
  $(".filter").removeClass("hide-element")
  $("#nyckelord").css({"width": "", "padding": ""})
  $("#bostadstyp").addClass("hide-element")
  $(".filter ul").css("padding-top", "6px")
    regularSearchArea()
    formQuery = false;
}

// When page is smaller than 670px switch to this form content
function formQuerySwitchContentMin() {
  mainUpper.style.backgroundImage = "url" + "('')"
  $(".area").addClass("hide-element")
  $(".minimum-rooms-max").addClass("hide-element")
  $(".minimum-rooms-min").removeClass("hide-element")
  $(".expandarea").css("width", "100%")
  $(".more-filter-list").css({"width": "100%", "padding": "0px"})
  $(".sold-inom-box").addClass("hide-element")  
  $("#nyckelord").css({"width": "100%", "padding": "0px"})
  $("#bostadstyp").removeClass("hide-element")
  $(".filter ul").css("padding-top", "0px")
  customSearchArea()
    if (showFilterClicked === true) {
      $(".filter").removeClass("hide-element")    
    } else {
      $(".filter").addClass("hide-element") 
    }
    formQuery = true;
}

// Add random image when page loads
if (formQuery === false) {
  window.addEventListener("load", function() {
    mainUpper.style.backgroundImage = "url" + "('" + randomImg.img + "')"
});
} else {
  window.addEventListener("load", function() {
    mainUpper.style.backgroundImage = "url" + "('')"
  });
}




