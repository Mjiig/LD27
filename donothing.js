function DoNothingLevel()
{
	this.finished=false;
	this.won=false;
	this.remaining=60;
}

DoNothingLevel.prototype.draw = function(ctx)
{
	ctx.fillStyle = "F00";
	ctx.textAlign="center";
	ctx.font="normal 85 Calibri";
	ctx.fillText("DON'T MOVE: " + Math.floor(this.remaining/10), 400, 350);
}

DoNothingLevel.prototype.click = function(x, y)
{
	if(this.remaing<60)
	{
		this.finished=true;
	}
}

DoNothingLevel.prototype.keyboard = function(keycode)
{
	this.finished=true;
}

DoNothingLevel.prototype.mousemove = function(x, y)
{
	if(this.remaining<=55)
	{
		this.finished=true;
	}
}

DoNothingLevel.prototype.tick = function()
{
	this.remaining--;
	if(this.remaining<=0)
	{
		this.finished=true;
		this.won=true;
	}
}

