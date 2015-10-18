function ObjectoGenerico(idTerm,Tipo,Caption,Nombre)
{
	"use strict";
	this.Id=idTerm;
	this.Tipo=Tipo;
	this.iluminadoModo=false; // switch necesario para poder realizar el parpadeo de cambio 
	this.Tipo=0;// valor identificativo de tipo 
	this.visible=true; // si el objeto ( graficamente ) esta visible o no
	this.Minimizado=true; // si el objeto ( graficamente ) esta minimizado o no
	this.Caption=Caption;
	this.Nombre=Nombre;
	this.Estado="APAGADO"; 
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
		case "Estado":
			return this.Estado;
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
			debugger;
			this.visible=valor;
		
			var MarcoSup = document.getElementById('marco_superior'+this.Id);
			if(this.visible)
			{
				var dato="#"+this.Nombre+this.Id;
				$(dato).show();
				MarcoSup.style.visibility='visible';
				//Desplegar(id_term,1);
			}
			else
			{
				$('#'+this.Nombre+this.Id).hide();

			}
			break;
		case "Minimizado" :
			this.Minimizado=valor;
			break;
		case "Caption" :
			this.configuracion.caption=valor;
			break;
		case "Estado" :	
			if(valor=="ENCENDIDO" || valor =="APAGADO")
				this.Estado=valor;
			break;
		default : 
			break;
	}
	
};


ObjectoGenerico.prototype.ClonaGenerico=function(objeto)
{
	debugger;
	var t = document.querySelector(objeto);
	var elemento = document.importNode(t.content, true);
	elemento.getElementById("obj_tipo2").id=this.Nombre+this.Id;
	elemento.getElementById("marco_superior").id="marco_superior"+this.Id;
	elemento.getElementById("icono_despliegue").id="icono_despliegue"+this.Id;
	elemento.getElementById("caption").id="caption_temp"+this.Id;
	elemento.getElementById("icono_OnOffSup").id="icono_OnOffSup"+this.Id;
	
	return elemento;
}	
	
ObjectoGenerico.prototype.ClonaGenerico_2=function()
{
	document.getElementById("icono_despliegue"+this.Id).setAttribute( "IdTerm",this.Id.toString());
	document.getElementById("icono_OnOffSup"+this.Id).setAttribute("IdTerm",this.Id.toString());
	
	$('#icono_despliegue'+idTerm).click(this.depliegue);
}	