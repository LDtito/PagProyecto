


//creamos variableas array para cada departamento
var departamentos_2=["CARCELEN","GUAYAQUIL","MANTA","QUITUMBE"];
var departamentos_3=["CARCELEN","GUAYAQUIL"];
var departamentos_4=["ATACAMES","ESMERALDAS","HUAQUILLAS","MANTA"];
var departamentos_5=["QUITUMBE"];
var departamentos_6=["ESMERALDAS"];
var departamentos_7=["CARCELEN","CUENCA","GUAYAQUIL","HUAQUILLAS","MACHALA","MANTA","QUITUMBE","SAN ELENA"];
var departamentos_8=["ESMERALDAS","SAN LORENZO"];
var departamentos_9=["QUITUMBE"];
var departamentos_10=["CARCELEN"]
var departamentos_11=["ATACAMES","CARCELEN","QUITUMBE"]
var departamentos_12=["ATACAMES","ESMERALDAS","GUAYAQUIL","HUAQUILLAS","LAGO AGRIO","MANTA","SAN LORENZO","SANTA ELENA"]
var departamentos_13=["GUAYAQUIL","QUITUMBE"];
var departamentos_14=["CARCELEN","ESMERALDAS","QUITUMBE","SAN RAFAEL"]

function cambia_departamento(){
 //tomamos el valor del select departamento elegido
 var dpt
 dpt = document.getElementById('departamentos').value	
     mis_dptos = acentos(dpt)
     // verificamos si el Departamento está definido

if (mis_dptos!=0) { 
      	 //si estaba definido, entonces coloco las opciones del Departamento correspondiente. 
      	 //selecciono el array del departamento adecuado 
      	 mis_municipios=eval("departamentos_"+mis_dptos) 
      	  //calculo el numero de municipios 
      	 num_municipios = mis_municipios.length 
      	 //marco el número de municipios en el select 
      	 document.f1.minucipios.length = num_municipios 
      	 //para cada municipio del array, lo introduzco en el select 
      	 for(i=0;i<num_municipios;i++){ 
         	 document.f1.minucipios.options[i].value=mis_municipios[i] 
         	 document.f1.minucipios.options[i].text=mis_municipios[i] 
      	 }	
   	    }else{ 
      	 //si no había municipio seleccionado, elimino los municipios del select 
      	 document.f1.minucipios.length = 1 
      	 //coloco un guión en la única opción que he dejado 
      	 document.f1.minucipios.options[0].value = " " 
      	 document.f1.minucipios.options[0].text = "SIN ASIGNAR" 
   	   } 
}// FIN DE FUNCIONcambia_departamento


   function acentos(dpt){
   var acentuada
   if(dpt=="Carcelén"){ acentuada="Carcelen";}
   else{
   	if(dpt=="Borbón"){ acentuada="Borbon"; }
   	else{
   		if(dpt=="CAQUETÁ"){ acentuada="CAQUETA"; }
   		else{
   			if(dpt=="CHOCÓ"){ acentuada="CHOCO"; }
   			else{
   				if(dpt=="CÓRDOBA"){ acentuada="CORDOBA"; }
   				else{
   					if(dpt=="DISTRITO CAPITAL"){ acentuada="DISTRITO_CAPITAL"; }
   					else{
   						if(dpt=="GUAINÍA"){ acentuada="GUAINIA"; }
   						else{
   							if(dpt=="LA GUAJIRA"){ acentuada="GUAJIRA"; }
   							else{
   								if(dpt=="NARIÑO"){ acentuada="NARINO"; }
   								else{
   									if(dpt=="NORTE DE SANTANDER"){ acentuada="NORTE_DE_SANTANDER"; }
   									else{
   									if(dpt=="QUINDÍO"){ acentuada="QUINDIO"; }
   									else{
   										if(dpt=="SAN ANDRÉS Y PROVIDENCIA"){ acentuada="SAN_ANDRES"; }
   										else{
   											if(dpt=="VALLE DEL CAUCA"){ acentuada="VALLE_DEL_CAUCA"; }
   											else{
                                               if(dpt=="VAUPÉS"){ acentuada="VAUPES"; }
                                               else{
                                               	  acentuada=dpt;
                                               }
   											}
   										}
   									}	
   									}
   								}
   							}
   						}
   					}
   				}
   			}
   		}
   	}
   }
   	
   		
return  acentuada

   }// fin funcion acentos

   
window.onload = function(){
	var fecha = new Date(); //Fecha actual
	var mes = fecha.getMonth()+1; //obteniendo mes
	var dia = fecha.getDate(); //obteniendo dia
	var ano = fecha.getFullYear(); //obteniendo año
	if(dia<10)
	  dia='0'+dia; //agrega cero si el menor de 10
	if(mes<10)
	  mes='0'+mes //agrega cero si el menor de 10
	document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
  }