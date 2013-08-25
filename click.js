function ClickLevel(difficulty)
{
	this.finished=false;
	this.won=false;
	this.remaining=30*Math.pow(0.95, difficulty/5);
}
ClickLevel.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#0F0";
	ctx.textAlign="center";
	ctx.font="normal 60px Calibri";
	ctx.fillText("CLICK NOW: " + Math.floor(this.remaining/10), 400, 350);
}

ClickLevel.prototype.click = function(x, y)
{
	this.finished=true;
	this.won=true;
}

ClickLevel.prototype.keyboard = function(keycode)
{
}

ClickLevel.prototype.mousemove = function(x, y)
{
}

ClickLevel.prototype.tick = function()
{
	this.remaining--;
	if(this.remaining<=0)
	{
		this.finished=true;
	}
}

