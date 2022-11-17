var perro = {raza:"Podenco", peso:12, altura:58, color:"negro"};
      perro.raza;
      perro["raza"];
      
      console.log(typeof(perro));

      var persona = {nombre:"Simon", apellidos:"Stoytchev", peso: "58kg", edad:20, altura:1.89, saludar: function saludar(){
        return "Hola";
      }};
      
      persona.despedir = function() {
        return "Estás despedido";
      }
      persona.devuelvePeso = function() {
        return this.peso;
      }

      persona.nombre;
      persona["nombre"];
      
      console.log("Esta persona se llama " + persona.nombre + " " +persona.apellidos + ", tiene " + persona.edad + " años " + "y su altura es de " + persona.altura + " metros.");
      console.log(persona.saludar());
      console.log(persona.despedir());
      console.log(persona.devuelvePeso());


      