function saludar(nombre, genero, edad) {
      if (genero === "M") {
        if (edad < 30) {
          return nombre;
        } else {
          return "Sr. " + nombre;
        }
      } else if (genero === "F") {
        if (edad < 30) {
          return nombre;
        } else {
          return "Sra. " + nombre;
        }
      } else {
        return nombre;
      }
    }
    export default saludar;