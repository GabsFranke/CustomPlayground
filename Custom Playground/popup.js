// elementos para los tabs
const ol = document.querySelectorAll('.ol');
const bloque = document.querySelectorAll('.bloque');
// los selectores de colores
const selectores = document.querySelectorAll('.colorSelector');
// botones
const restoreOne = document.querySelectorAll('.restore')
const deleteStorage = document.querySelector('.resetStorage'); // dev-only
const resetPg = document.querySelector('.restoreAll');
const saveAll = document.querySelector('.saveAll');
const loadUserSettings = document.querySelector('.loadUserSettings');
const darkPg = document.querySelector('.darkPg');

// configuracion de los tabs
ol.forEach((eachOl, i) => {
    eachOl.addEventListener('click', function () {

        ol.forEach((eachOl, i) => {
            eachOl.classList.remove('activo');
            bloque[i].classList.remove('activo');
        })

        eachOl.classList.add('activo');
        bloque[i].classList.add('activo');
    })
})

window.onload = function () {
    syncInputValues()
}

// traer y adjuntar los settings en el valor de cada input
function syncInputValues() {
    chrome.storage.sync.get(function (userSettings) {
        for (const keyName in userSettings) {
            if (Object.hasOwnProperty.call(userSettings, keyName)) {
                if (userSettings.save) {
                    if (keyName.startsWith('u')) {
                        const value = userSettings[keyName];
                        const newName = keyName.slice(1)
                        const input = document.querySelector(`#${newName}`);
                        if (value && input) {
                            input.setAttribute('value', `${value}`)
                        }
                    }
                } else {
                    const value = userSettings[keyName];
                    const input = document.querySelector(`#${keyName}`);
                    if (value && input) {
                    input.setAttribute('value', `${value}`)
                    }
                }
            }
        }
    })
}


// escuchar cambios en los selectores de color, adjuntar cada valor y enviar al storage
selectores.forEach(input => {
    input.addEventListener('change', function () {
        input.setAttribute('value', `${input.value}`);
        if (input.id === 'brand') {
            chrome.storage.sync.set({
                'brand': input.value,
            })
        }
        if (input.id === 'white') {
            chrome.storage.sync.set({
                'white': input.value,
            })
        }
        if (input.id === 'commonText') {
            chrome.storage.sync.set({
                'commonText': input.value,
            })
        }
        if (input.id === 'disabled') {
            chrome.storage.sync.set({
                'disabled': input.value,
            })
        }
        if (input.id === 'lightGray') {
            chrome.storage.sync.set({
                'lightGray': input.value,
            })
        }
        if (input.id === 'background') {
            chrome.storage.sync.set({
                'background': input.value,
            })
        }
        if (input.id === 'primary') {
            chrome.storage.sync.set({
                'primary': input.value,
            })
        }
        if (input.id === 'primaryDark') {
            chrome.storage.sync.set({
                'primaryDark': input.value,
            })
        }
        if (input.id === 'primaryLight') {
            chrome.storage.sync.set({
                'primaryLight': input.value,
            })
        }
        if (input.id === 'success') {
            chrome.storage.sync.set({
                'success': input.value,
            })
        }
        if (input.id === 'successLight') {
            chrome.storage.sync.set({
                'successLight': input.value,
            })
        }
        if (input.id === 'warning') {
            chrome.storage.sync.set({
                'warning': input.value,
            })
        }
        if (input.id === 'warningLight') {
            chrome.storage.sync.set({
                'warningLight': input.value,
            })
        }
        if (input.id === 'info') {
            chrome.storage.sync.set({
                'info': input.value,
            })
        }
        if (input.id === 'infoLight') {
            chrome.storage.sync.set({
                'infoLight': input.value,
            })
        }
        if (input.id === 'danger') {
            chrome.storage.sync.set({
                'danger': input.value,
            })
        }
        if (input.id === 'dangerLight') {
            chrome.storage.sync.set({
                'dangerLight': input.value,
            })
        }
    })
})

// delete storage? (dev-only)
deleteStorage.addEventListener('click', function () {
    if (confirm("Esto VACIARA por completo el storage de chrome, estas seguro?")) {
        chrome.storage.sync.clear();
    } else {
        deleteStorage.preventDefault()
    }
})

// restaurar cada uno
 restoreOne.forEach(button => {
    button.addEventListener('click', function name(params) {
        selectores.forEach(input => {
            if (input.id === 'brand' && button.id === 'brand') {
                input.setAttribute('value', '#cb1e40');
                chrome.storage.sync.set({
                    'brand': '#cb1e40'
                })
            }
            if (input.id === 'white' && button.id === 'white') {
                input.setAttribute('value', '#ffffff');
                chrome.storage.sync.set({
                    'white': '#ffffff'
                })
            }
            if (input.id === 'commonText' && button.id === 'commonText') {
                input.setAttribute('value', '#303030');
                chrome.storage.sync.set({
                    'commonText': '#303030'
                })
            }
            if (input.id === 'disabled' && button.id === 'disabled') {
                input.setAttribute('value', '#6C757D');
                chrome.storage.sync.set({
                    'disabled': '#6C757D'
                })
            }
            if (input.id === 'lightGray' && button.id === 'lightGray') {
                input.setAttribute('value', '#d9d9d9');
                chrome.storage.sync.set({
                    'lightGray': '#d9d9d9'
                })
            }
            if (input.id === 'background' && button.id === 'background') {
                input.setAttribute('value', '#f5f5f5');
                chrome.storage.sync.set({
                    'background': '#f5f5f5'
                })
            }
            if (input.id === 'primary' && button.id === 'primary') {
                input.setAttribute('value', '#4349B5');
                chrome.storage.sync.set({
                    'primary': '#4349B5'
                })
            }
            if (input.id === 'primaryDark' && button.id === 'primaryDark') {
                input.setAttribute('value', '#1B207B');
                chrome.storage.sync.set({
                    'primaryDark': '#1B207B'
                })
            }
            if (input.id === 'primaryLight' && button.id === 'primaryLight') {
                input.setAttribute('value', '#E5E6FD');
                chrome.storage.sync.set({
                    'primaryLight': '#E5E6FD'
                })
            }
            if (input.id === 'success' && button.id === 'success') {
                input.setAttribute('value', '#00823F');
                chrome.storage.sync.set({
                    'success': '#00823F'
                })
            }
            if (input.id === 'successLight' && button.id === 'successLight') {
                input.setAttribute('value', '#E3F8EA');
                chrome.storage.sync.set({
                    'successLight': '#E3F8EA'
                })
            }
            if (input.id === 'warning' && button.id === 'warning') {
                input.setAttribute('value', '#EA752E');
                chrome.storage.sync.set({
                    'warning': '#EA752E'
                })
            }
            if (input.id === 'warningLight' && button.id === 'warningLight') {
                input.setAttribute('value', '#FFEEE3');
                chrome.storage.sync.set({
                    'warningLight': '#FFEEE3'
                })
            }
            if (input.id === 'info' && button.id === 'info') {
                input.setAttribute('value', '#3674E6');
                chrome.storage.sync.set({
                    'info': '#3674E6'
                })
            }
            if (input.id === 'infoLight' && button.id === 'infoLight') {
                input.setAttribute('value', '#CAE1FF');
                chrome.storage.sync.set({
                    'infoLight': '#CAE1FF'
                })
            }
            if (input.id === 'danger' && button.id === 'danger') {
                input.setAttribute('value', '#D53F25');
                chrome.storage.sync.set({
                    'danger': '#D53F25'
                })
            }
            if (input.id === 'dangerLight' && button.id === 'dangerLight') {
                input.setAttribute('value', '#FFE4E3');
                chrome.storage.sync.set({
                    'dangerLight': '#FFE4E3'
                })
            }
        })
    })
}) 

// guardar settings del usuario!
saveAll.addEventListener('click', function () {
    selectores.forEach(input => {
        if (input.id === 'brand') {
            chrome.storage.sync.set({
                'ubrand': input.value,
            })
        }
        if (input.id === 'white') {
            chrome.storage.sync.set({
                'uwhite': input.value,
            })
        }
        if (input.id === 'commonText') {
            chrome.storage.sync.set({
                'ucommonText': input.value,
            })
        }
        if (input.id === 'disabled') {
            chrome.storage.sync.set({
                'udisabled': input.value,
            })
        }
        if (input.id === 'lightGray') {
            chrome.storage.sync.set({
                'ulightGray': input.value,
            })
        }
        if (input.id === 'background') {
            chrome.storage.sync.set({
                'ubackground': input.value,
            })
        }
        if (input.id === 'primary') {
            chrome.storage.sync.set({
                'uprimary': input.value,
            })
        }
        if (input.id === 'primaryDark') {
            chrome.storage.sync.set({
                'uprimaryDark': input.value,
            })
        }
        if (input.id === 'primaryLight') {
            chrome.storage.sync.set({
                'uprimaryLight': input.value,
            })
        }
        if (input.id === 'success') {
            chrome.storage.sync.set({
                'usuccess': input.value,
            })
        }
        if (input.id === 'successLight') {
            chrome.storage.sync.set({
                'usuccessLight': input.value,
            })
        }
        if (input.id === 'warning') {
            chrome.storage.sync.set({
                'uwarning': input.value,
            })
        }
        if (input.id === 'warningLight') {
            chrome.storage.sync.set({
                'uwarningLight': input.value,
            })
        }
        if (input.id === 'info') {
            chrome.storage.sync.set({
                'uinfo': input.value,
            })
        }
        if (input.id === 'infoLight') {
            chrome.storage.sync.set({
                'uinfoLight': input.value,
            })
        }
        if (input.id === 'danger') {
            chrome.storage.sync.set({
                'udanger': input.value,
            })
        }
        if (input.id === 'dangerLight') {
            chrome.storage.sync.set({
                'udangerLight': input.value,
            })
        }
    })
})

// cargar perfil del usuario
loadUserSettings.addEventListener('click', function () {
    chrome.storage.sync.set({
        'save': true,
    })
    syncInputValues()
})

// retornar a la config default de PG?
resetPg.addEventListener('click', function () {
    chrome.storage.sync.set({
        'save': false,
        'brand': '#cb1e40',
        'white': '#ffffff',
        'commonText': '#303030',
        'disabled': '#6C757D',
        'lightGray': '#d9d9d9',
        'background': '#f5f5f5',
        'primary': '#4349B5',
        'primaryDark': '#1B207B',
        'primaryLight': '#E5E6FD',
        'success': '#00823F',
        'successLight': '#E3F8EA',
        'warning': '#EA752E',
        'warningLight': '#FFEEE3',
        'info': '#3674E6',
        'infoLight': '#CAE1FF',
        'danger': '#D53F25',
        'dangerLight': '#FFE4E3',
    })
    syncInputValues();
})

// Dark PG settings
darkPg.addEventListener('click', function () {
    chrome.storage.sync.set({
        'save': false,
        'brand': '#01b100',
        'white': '#262626',
        'commonText': '#f1f1f1',
        'disabled': '#5c5c5c',
        'lightGray': '#aba999',
        'background': '#101010',
        'primary': '#15a507',
        'primaryDark': '#0f5425',
        'primaryLight': '#032e0a',
        'success': '#23c512',
        'successLight': '#0d3a08',
        'warning': '#EA752E',
        'warningLight': '#9f3512',
        'info': '#0d8700',
        'infoLight': '#0d3a08',
        'danger': '#c51212',
        'dangerLight': '#3a0808',
    })
    syncInputValues();
})