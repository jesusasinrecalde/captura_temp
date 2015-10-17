function TermostatoSistena(idTerm)
{
	"use strict";
	ObjectoGenerico.call(this,idTerm,0,"Termostato"+idTerm);
	this.Id=idTerm;
	this.parametros={temperatura:35.5, modo:0,temperaturaAmbiente:30.5,ValvulaAbierta:0}; // datos que se recibe del servicio pass
	this.configuracion={temperatura:35.5, modo:0, Caption:""}; // datos que se envia al servicio pass , son los que se modifican graficamente
	
	
	this.estado=1; // donde 1 es on y 0 off
	
	
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