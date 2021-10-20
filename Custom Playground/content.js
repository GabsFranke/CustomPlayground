// Target para el observer
const theDocument = document.documentElement;
// Configuracion del observer:
const config = {
    childList: true,
    subtree: true
};

const body = document.querySelector('body');

// aplicar los userSettings y comenzar a escuchar el storage cuando se recarga el sitio.
window.onload = function () {
    getStoredSettings();
    dynamicChanges();
    doCommonTextColor();
}

// traer los settings del usuario con storage.get y enviarlos al css
function getStoredSettings() {
    chrome.storage.sync.get(function (userSettings) {
        applySettings(userSettings);
    });
}

// traer color de texto unicamente para los iframes
function doCommonTextColor() {
    chrome.storage.sync.get(function (userSettings) {
        modifyIframeTextColor(userSettings.commonText)
    });
}

// escuchar cambios en el storage, sobreescribir y apliarlos.
function dynamicChanges() {
    chrome.storage.onChanged.addListener(function (changes) {
        getStoredSettings()
        if (changes.commonText) {
            commonText = changes.commonText.newValue;
            modifyIframeTextColor(commonText)
        }
    })
}



// f para aplicar los settings del usuario
function applySettings(userSettings) {

    // instanciar un css
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(
        `:root {
        --brand: ${userSettings.brand};
        --white: ${userSettings.white};
        --common-text: ${userSettings.commonText};
        --disabled: ${userSettings.disabled};
        --light-gray: ${userSettings.lightGray};
        --background: ${userSettings.background};
        --primary: ${userSettings.primary};
        --primary-dark: ${userSettings.primaryDark};
        --primary-light: ${userSettings.primaryLight};
        --success: ${userSettings.success};
        --success-light: ${userSettings.successLight};
        --warning: ${userSettings.warning};
        --warning-light: ${userSettings.warningLight};
        --info: ${userSettings.info};
        --info-light: ${userSettings.infoLight};
        --danger: ${userSettings.danger};
        --danger-light: ${userSettings.dangerLight};
    }
    body {
        background-color: var(--background);
        color: var(--common-text);
     }

     p {
         color: var(--common-text);
     }
     
     /* Cuestionarios */
     .quiz-classroom-footer{
         background-color: var(--white);
         color: var(--common-text);
     }
     
     .question-header__title span span {
         color: var(--common-text);
     }
     
     .basic-block-content {
         background-color: var(--white);
         color: var(--common-text);
     }
     
     /* Random Lists */
     p, small, ul, li {
         color: var(--common-text);
     }
     
     
     /* Caja Negra */
     .Editor {
         background-color: rgba(var(--rgb-black), 0.87);
         color: var(--common-text);
     }
     
     .Editor .studioNavigation {
         background-color: var(--primary-light);
         color: var(--common-text);
     }
     
     .Editor .sidebar .sections>li .sectionName {
         background-color: var(--primary-light);
         color: var(--common-text);
     }
     
     .Editor .main .header .workingArea {
         background-color: var(--primary-light);
         color: var(--common-text);
     }
     
     .Editor .sidebar .header {
         color: var(--common-text);
     }
     
     .Editor .main .header ul li[active=true] {
         background-color: rgba(var(--rgb-black), 0.87);
         color: var(--common-text);
     } 
     
     /* La Terminal */
     .NodeConsole {
         background-color: var(--background);
     }
     
     .NodeConsole .header ul li {
         background-color: var(--primary-light);
     }
     
     .NodeConsole .whiteLog {
         color: var(--common-text);
     }
     
     .NodeConsole .grayLog {
         color: var(--disabled);
     }`
    );

    // aplicar el css a un documento:
    document.adoptedStyleSheets = [sheet];
}


// f para inyectar el color seleccionado al texto generado dinamicamente
function modifyIframeTextColor(commonText) {
    const iFrames = document.querySelectorAll("iframe");
    iFrames.forEach(iFrame => {
        if (iFrame.hasAttribute("srcdoc")) {
            iFrame.srcdoc += `<style>*{--common-text:${commonText}; --ps-title:${commonText};}</style>`;
        }
    });
};

// Instancia de observer
const iFramesObserver = new MutationObserver(function (mutations) {
    mutations.forEach(mutation => {
        if (mutation.addedNodes[0]) {
            const nodeList = mutation.addedNodes[0].childNodes;
            nodeList.forEach(node => {
                if (node.className === "basic-block-content") {
                    doCommonTextColor();
                }
            })
        }
    });
});


// Nodos a observar e
// Invocaciones del observer:
if (theDocument) {
    iFramesObserver.observe(theDocument, config);
};

// Posteriormente, puede detener la observacion
/* iFramesObserver.disconnect();
layoutObserver.disconnect(); */