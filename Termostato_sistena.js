function TermostatoSistena(idTerm)
{
	"use strict";
	debugger;
	ObjectoGenerico.call(this,idTerm,0,"Termostato"+idTerm,"Termostato");
	this.Id=idTerm;
	this.parametros={temperatura:35.5, modo:0,temperaturaAmbiente:30.5,ValvulaAbierta:0}; // datos que se recibe del servicio pass
	this.configuracion={temperatura:35.5, modo:0, Caption:""}; // datos que se envia al servicio pass , son los que se modifican graficamente
	
	
	this.estado=1; // donde 1 es on y 0 off
	
	
	var clone = ObjectoGenerico.prototype.ClonaGenerico.call(this,'#termostato_tipo_2');
	
	// Elementos graficos propios del objeto
	clone.getElementById("tempAmbiente").id="tempAmbiente"+idTerm;
	
	
	$("#contenedor").append(clone); // se añade el objeto al documento DOM dentro del elemento contenedor
	
	//ObjectoGenerico.prototype.ClonaGenerico_2.call();
	
	
};

TermostatoSistena.prototype = Object.create(ObjectoGenerico.prototype); 


TermostatoSistena.prototype.get=function(atributo)
{
	switch(atributo)
	{
		case "Estado" :
			return this.estado;
			break;
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
		
		case "Estado" :
			this.estado=valor;
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

TermostatoSistena.prototype.despliegue=function()
{
	
	debugger;
}

TermostatoSistena.prototype.Actualizar=function()
{
	debugger;
	var MarcoSup = document.getElementById('marco_superior'+this.Id);
	switch ( this.Estado)
	{
		case "APAGADO" :
			MarcoSup.style.backgroundColor="#838DFF";
			MarcoSup.style.color="#C4DDF9";
			break;
		case "ENCENDIDO" :
			MarcoSup.style.backgroundColor="#555BA8";
			MarcoSup.style.color="#669";
			break;
	}
	
}