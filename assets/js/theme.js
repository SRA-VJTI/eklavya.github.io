// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}


let setTheme = (theme) =>  {
  //transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);
  setLogo(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);

    // Add class to tables.
    let tables = document.getElementsByTagName('table');
    for(let i = 0; i < tables.length; i++) {
      if (theme == "dark") {
        tables[i].classList.add('table-dark');
      } else {
        tables[i].classList.remove('table-dark');
      }
    }
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  sessionStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};


let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
}


let setGiscusTheme = (theme) => {

  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  }

  sendMessage({
    setConfig: {
      theme: theme
    }
  });

}


let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500)
}


let initTheme = () => {
  let savedTheme = sessionStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
  } else {
    setTheme("light"); // default if no preference saved
  }
};

let setLogo = (theme) => {
  // Header logos (only exist on non-about pages)
  const logoLight = document.getElementById('logo-light');
  const logoDark = document.getElementById('logo-dark');
  
  // About page logos (only exist on about page)
  const aboutLogoLight = document.getElementById('about-logo-light');
  const aboutLogoDark = document.getElementById('about-logo-dark');
  
  if (theme === "dark") {
    // Header logos (if they exist)
    if (logoLight && logoDark) {
      logoLight.style.display = 'none';
      logoDark.style.display = 'inline-block';
    }
    
    // About page logos (if they exist)
    if (aboutLogoLight && aboutLogoDark) {
      aboutLogoLight.style.display = 'none';
      aboutLogoDark.style.display = 'inline-block';
    }
  } else {
    // Header logos (if they exist)
    if (logoLight && logoDark) {
      logoLight.style.display = 'inline-block';
      logoDark.style.display = 'none';
    }
    
    // About page logos (if they exist)
    if (aboutLogoLight && aboutLogoDark) {
      aboutLogoLight.style.display = 'inline-block';
      aboutLogoDark.style.display = 'none';
    }
  }
};

initTheme();