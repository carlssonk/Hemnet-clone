// Filter Select
let filterSelect = document.querySelectorAll(".filter-select")
let soldInom = document.querySelectorAll(".sold-inom-labels")
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
        if(showFilterClicked === true) {
          searchFilterLower.classList.remove("hide-element");
          soldInomBox2.classList.add("hide-element");
          document.querySelector("#pris-slutpris").innerText = "Högst pris"
          moreFilterOptions.style.height = "100%"
          findRealEstate.innerText = "Hitta bostäder till salu"
        } else {
          soldInomContainer.classList.add("hide-element")
          flerSokFilter.classList.remove("hide-element")          
        }

      }else if(this === tabs[1]) {
        if(showFilterClicked === true) {
          soldInomBox.innerHTML = "";
          soldInomBox2.classList.remove("hide-element")          
          searchFilterLower.classList.add("hide-element");
          document.querySelector("#pris-slutpris").innerText = "Högst slutpris"
          moreFilterOptions.style.transition = "0ms"
          moreFilterOptions.style.height = "100%"
          document.querySelector("#sold-inom-padding").style.paddingBottom = "14px"
          findRealEstate.innerText = "Hitta slutpriser"
        } else {
          flerSokFilter.classList.add("hide-element")
          soldInomContainer.classList.remove("hide-element")          
        }
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
      document.querySelector(".select-option-box").classList.toggle("hide-element")      
      document.querySelector(".location-search-box").classList.toggle("hide-element")
      searchLocation.style.padding = "0";
      skrivIn.innerHTML =
      `
      <i class="fas fa-bars"></i>
      <span><a href="#">Välj i lista</a></span>  
      `
    } else {
      document.querySelector(".select-option-box").classList.toggle("hide-element")      
      document.querySelector(".location-search-box").classList.toggle("hide-element")
      searchLocation.style.padding = "8px 3px 8px 3px";
      skrivIn.innerHTML =
      `
      <i class="fas fa-pencil-alt"></i>
      <span><a href="#">Skriv in</a></span>  
      `
    }
  });
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
    moreFilterOptions.style.height = "164px"
    moreFilterOptions.style.padding = "12px 0px 0px"
    moreFilterOptions.style.opacity = "1"
    moreFilterOptions.style.overflow = "visible"
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

