function DoNothingLevel()
{
	this.finished=false;
	this.won=false;
	this.remaining=45;
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
	this.remaining=45;
}

DoNothingLevel.prototype.keyboard = function(keycode)
{
	this.remaining=45;
}

DoNothingLevel.prototype.mousemove = function(x, y)
{
	this.remaining=45;
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

