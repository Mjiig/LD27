function CatchLevel(difficulty)
{
	this.finished=false;
	this.won=false;
	this.circlesX=[];
	this.circlesY=[];
	this.circlesdx=[];
	this.circlesdy=[];
	this.mousex=-1000000;
	this.mousey=-1000000;

	for(var i=0; i < 4+rand(difficulty/4); i++)
	{
		this.circlesX.push(rand(750)+25);
		this.circlesY.push(rand(550)+25);
		this.setspeed(i);
	}
}

CatchLevel.prototype.setspeed = function(i)
{
	this.circlesdx[i]=rand(30)-15;
	this.circlesdy[i]=rand(30)-15;
}

CatchLevel.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#0F0";
	for(var i=0; i<this.circlesX.length; i++)
	{
		var x=this.circlesX[i];
		var y=this.circlesY[i];
		ctx.beginPath();
		ctx.arc(x, y, 25, 0, 2*Math.PI, false);
		ctx.fill();
	}

	ctx.fillStyle="#FFF";
	ctx.textAlign="center";
	ctx.font = "normal 50px Calibri";
	ctx.fillText("Catch the circles!", 400, 600);
}

CatchLevel.prototype.click = function(x, y)
{
}

CatchLevel.prototype.tick = function()
{
	for(var i=0; i< this.circlesX.length; i++)
	{
		this.circlesX[i]+=this.circlesdx[i];
		this.circlesY[i]+=this.circlesdy[i];

		
		var x=this.circlesX[i];
		var y=this.circlesY[i];

		if(x<25 || x>775)
		{
			this.circlesdx[i]*=-1
		}

		if(y<25 || y>575)
		{
			this.circlesdy[i]*=-1
		}
	}

	for(var i=this.circlesX.length-1; i>=0; i--)
	{
		var cx = this.circlesX[i];
		var cy = this.circlesY[i];
		var x = this.mousex;
		var y = this.mousey;
		 

		if((cx-x)*(cx-x)+(cy-y)*(cy-y) < 25*25)
		{
			this.circlesX.splice(i, 1);
			this.circlesY.splice(i, 1);
			this.circlesdx.splice(i, 1);
			this.circlesdy.splice(i, 1);
		}
	}

	if(this.circlesX.length==0)
	{
		this.finished=true;
		this.won=true;
	}
}

CatchLevel.prototype.keyboard = function(keycode)
{
}

CatchLevel.prototype.mousemove = function(x, y)
{
	this.mousex=x;
	this.mousey=y;
}
