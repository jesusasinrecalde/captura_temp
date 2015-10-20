function TermostatoSistena(idTerm)
{
	"use strict";


	debugger;
	ObjectoGenerico.call(this,idTerm,0,"Termostato"+idTerm,"Termostato","#838DFF","#C4DDF9","#555BA8","#669");
	this.Id=idTerm;
	this.parametros={temperatura:35.5, modo:0,temperaturaAmbiente:30.5,ValvulaAbierta:0}; // datos que se recibe del servicio pass
	this.configuracion={temperatura:35.5, modo:0, Caption:""}; // datos que se envia al servicio pass , son los que se modifican graficamente
	
		
	var clone = ObjectoGenerico.prototype.ClonaGenerico.call(this,'#termostato_tipo_2');
	
	// Elementos graficos propios del objeto
	clone.getElementById("tempAmbiente").id="tempAmbiente"+idTerm;
	
	
	$("#contenedor").append(clone); // se añade el objeto al documento DOM dentro del elemento contenedor ...
	
	
	ObjectoGenerico.prototype.ClonaGenerico_2.call(this);// ... una vez definido el objeto grafico al completo lo incluimos en la pagina 
	
	this.Actualizar();// Situamos la visualizacion al mismo nivel que el estado del objeto
	
};

TermostatoSistena.prototype = Object.create(ObjectoGenerico.prototype); 


TermostatoSistena.prototype.get=function(atributo)
{
	switch(atributo)
	{
		case "temperatura":
			return this.configuracion.temperatura;
		default:
            return ObjectoGenerico.prototype.get.call(this,atributo); 
			break;	
			
	}

};

TermostatoSistena.prototype.set=function(atributo,valor)
{
	switch(atributo)
	{
		case "temperatura" :
			this.configuracion.temperatura=valor;
			break;
		case "modo" :
			this.configuracion.modo=valor;
			break;
		
		
		default :
			ObjectoGenerico.prototype.set.call(this,atributo,valor);
			break;
	}
	this.Actualizar();
};

TermostatoSistena.prototype.HayDatosCambiados=function()
{
	var bRetorno=false;
	if((this.parametros.modo != this.configuracion.modo)|| (this.parametros.temperatura != this.configuracion.temperatura))
	{
		bRetorno=true;
	}
	return bRetorno;
};

/** Pulsacion del boton despliegue/repliegue de la pestaña principal, cambio maximizado/minizado 
*/
TermostatoSistena.prototype.Desplegar=function()
{
	ObjectoGenerico.prototype.Desplegar.call(this);
}

TermostatoSistena.prototype.CambioOnOff=function()
{
	ObjectoGenerico.prototype.CambioOnOff.call(this);
	this.Actualizar(this);
}

TermostatoSistena.prototype.Actualizar=function()
{
	ObjectoGenerico.prototype.Actualizar.call(this);
	
}

