# CustomPlayground
Segunda version de una extension para modificar la apariencia de playground.digitalhouse.com


*Atencion: Esta extencion utiliza chrome.storage, el cual tiene ciertas limitaciones de "throtling":*

> chrome.storage is not a big truck. It's a series of tubes. And if you don't understand, those tubes can be filled, and if they are filled when you put your message in, it gets in line, and it's going to be delayed by anyone that puts into that tube enormous amounts of material.

Esta limitacion bloquea el acceso al storage **durante un minuto** si se superan las **120 interacciones por minuto**. Es decir, si hiciste muchos cambios muy rapido es posible que la extension deje de funcionar durante un minuto. Esto no es un bug, solo debes esperar :)


## Como instalar:
Por el momento se instala como una extension "unpacked".
1. Descargar la carpeta *Custom Playground*.
2. En Chrome ir a: *Manejar extensiones* (chrome://extensions/)
3. Habilitar el *Modo Developer*
4. Click en *Cargar Descomprimida* ("Load Unpacked"), y seleccionar la carpeta *Custom Playground*
