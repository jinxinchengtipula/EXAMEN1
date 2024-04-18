const compras = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Martin Albert Persch",
        "imagen": "profesor1.jpg",
        "productos": [
            {
                "nombre": "LIMA-2024-01-INGENIERÍA DE SISTEMAS E INFORMÁTICA-CONOCIMIENTO CIENTÌFICO-P-V-A-NOC-0",
                "descripcion": "Conocimiento científico es una asignatura correspondiente al área de Formación de Estudios Generales, su carácter es teórico. Tiene como propósito desarrollar en el estudiante la capacidad de análisis y comprensión de los fundamentos filosóficos de la ciencia como un campo empírico - racional. Abarca las siguientes unidades: Historia de la ciencia y el conocimiento científico. Fundamentos filosóficos de la ciencia. La distinción de los campos entre ciencias naturales y sociales. El método científico y las posturas epistemológicas Los problemas actuales de la ciencia y los Paradigmas de investigación.",
                "imagen": "curso1.jpg" 
            },
           
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "AGUSTIN EDUARDO ULLON RAMIREZ",
        "imagen": "profesor2.jpg",

        "productos": [
            {
                
                "nombre": "LIMA-2024-01-INGENIERÍA DE SISTEMAS E INFORMÁTICA-BASE DE DATOS II-P-P-A-NOC-0",
                "": " La asignatura forma parte del área de Formación Especializada, es de carácter teórico-práctico. Tiene como propósito capacitar al estudiante en el manejo de técnicas y herramientas para utilizar la información almacenada de los Sistemas de información de una forma óptima y contribuir en la mejor gestión de las empresas.  Su contenido está organizado de la siguiente manera: I. Lenguaje de manipulación de datos DML; II. Vistas y administración de la base de datos; III. Procedimientos almacenados, funciones y cursores; IV. Disparadores y Transacciones.",
                "imagen": "curso2.jpg" 

            },
            
        ]
    },
    {
        "id": "17",
        "uuid": "1566664514aa",
        "nombre": "ROGGER FRANCCESCO DE LA ROSA CAMPOS",
        "imagen": "profesor3.jpg",

        
        "productos": [
            {
                "nombre": "LIMA-2024-01-INGENIERÍA DE SISTEMAS E INFORMÁTICA-DESARROLLO WEB-P-P-A-NOC-0",
                "descripcion": "La asignatura forma parte del área de Formación Especializada, es de carácter teóricopráctico. Tiene como propósito capacitar al estudiante para desarrollar portales enplataforma web con estándares internacionales. Su contenido está organizado en lossiguientes temas generales: I. Programación Web Dinámica; II. Programación Web conFramework de JavaScript; III. Programación Web Interactiva con bases de datos, IV.Servicios y transacciones HTTP.",
                "imagen": "curso3.jpg" 
            }
        ]
    }

];

const $misProductos = $("#misProductos");

compras.forEach((compra) => {
    const link = "producto.html?idcompra=" + compra.id;
    const template = `
        <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <img src="images/${compra.imagen}" alt="${compra.nombre}" class="circle">
            <span class="title">${compra.nombre}</span>
            <p class="descripcion" style="display: none;">
                ${compra.productos[0].descripcion ? compra.productos[0].descripcion : ''}
            </p>
            <p class="precio">
                ${compra.productos[0].monto ? compra.productos[0].monto : ''}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon verProducto">
                <i class="material-icons">grade</i>
                Ver producto
            </a>
        </li>
    `;
    $misProductos.append(template);
});


$(".verProducto").on("click", function() {
    const $producto = $(this).closest(".collection-item");
    const $descripcion = $producto.find(".descripcion");
    const isVisible = $descripcion.is(":visible");
    
    $(".descripcion").hide(); 
    if (!isVisible) {
        $descripcion.show(); 
    }
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = parseInt(params.get("idcompra"));

if (idcompra) {
    compras.forEach((compra) => {
        if (parseInt(compra.id) === idcompra) { 
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);

            compra.productos.forEach((producto) => {
                const template = `
                    <li class="collection-item">
                        <div class="producto-info">
                            <img src="images/${producto.imagen}" alt="${producto.nombre}">
                            <p class="nombre">${producto.nombre ? producto.nombre : ''}</p>
                            <p class="descripcion">${producto.descripcion ? producto.descripcion : ''}</p>
                        </div>
                    </li>
                `;
                $("#myProducts").append(template);
            });
        }
    });
}
