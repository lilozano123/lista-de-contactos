class Contacto {
    constructor(id, nombres, apellidos, telefono, ubicaciones) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.ubicaciones = ubicaciones;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(id, nombres, apellidos, telefono, ubicaciones) {
        const nuevoContacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones);
        this.contactos.push(nuevoContacto);
    }

    borrarContacto(id) {
        const indice = this.contactos.findIndex(contacto => contacto.id === id);
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log(`Contacto con ID ${id} eliminado.`);
        } else {
            console.log(`No se encontró el contacto con ID ${id}.`);
        }
    }

    imprimirContactos() {
        if (this.contactos.length > 0) {
            console.log("Lista de contactos:");
            this.contactos.forEach(contacto => console.log(contacto));
        } else {
            console.log("La lista de contactos está vacía.");
        }
    }
}

// Ejemplo de uso
const listaContactos = new ListaContactos();
listaContactos.agregarContacto(1, "melisa", "lozano", "365821554", { ciudad: "olaya", direccion: "Calle las delicias" });
listaContactos.agregarContacto(2, "jose", "fortuna", "253791154", { ciudad: "pozon", direccion: "calle la cuchara" });
listaContactos.imprimirContactos();
listaContactos.borrarContacto(1);
listaContactos.imprimirContactos();
