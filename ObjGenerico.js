function ObjectoGenerico(idTerm,Tipo,Caption)
{
	"use strict";
	this.Id=idTerm;
	this.Tipo=Tipo;
	this.iluminadoModo=false; // switch necesario para poder realizar el parpadeo de cambio 
	this.Tipo=0;// valor identificativo de tipo 
	this.visible=true; // si el objeto ( graficamente ) esta visible o no
	this.Minimizado=true; // si el objeto ( graficamente ) esta minimizado o no
	this.Caption=Caption;
};

ObjectoGenerico.prototype.get=function(atributo)
{
	switch(atributo)
	{
		case "Id":
			return this.Id;
			break;
		case "Tipo":
			return this.Tipo;
			break;
		case "Visible":
			return this.visible;
			break;
		case "Minimizamo":
			return this.Minimizado;
		case "Caption" :
			return this.Caption;
			break;
		default :
			return null;
			break;
	}
};

ObjectoGenerico.prototype.set=function(atributo,valor)
{
	switch(atributo)
	{
		
		case "Visible" :
			this.visible=valor;
			break;
		case "Minimizado" :
			this.Minimizado=valor;
			break;
		case "Caption" :
			this.configuracion.caption=valor;
			break;
		default :
			break;
	}
	
};