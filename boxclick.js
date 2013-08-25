function BoxesLevel(difficulty)
{
	this.finished=false;
	this.won=false;
	this.boxesX=[];
	this.boxesY=[];

	for(var i=0; i<4+rand(difficulty/4); i++)
	{
		this.boxesX.push(rand(750));
		this.boxesY.push(rand(550));
	}
}

BoxesLevel.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#0F0";
	for(var i=0; i<this.boxesX.length; i++)
	{
		ctx.fillRect(this.boxesX[i], this.boxesY[i], 50, 50);
	}
}

BoxesLevel.prototype.click = function(x, y)
{
	for(var i=this.boxesX.length-1; i>=0; i--)
	{
		boxX=this.boxesX[i];
		boxY=this.boxesY[i];
		if(x>boxX && x<boxX+50 && y>boxY && y<boxY+50)
		{
			this.boxesX.splice(i,1);
			this.boxesY.splice(i,1);
		}
	}

	if(this.boxesX.length==0)
	{
		this.finished=true;
		this.won=true;
	}
}

BoxesLevel.prototype.tick = function()
{
}

BoxesLevel.prototype.keyboard = function(keycode)
{
}

BoxesLevel.prototype.mousemove = function(x, y)
{
}
