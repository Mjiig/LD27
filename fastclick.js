function FastClickLevel()
{
	this.finished=false;
	this.won=false;
	this.clicks=rand(10)+10;
}

FastClickLevel.prototype.draw = function(ctx)
{
	ctx.fillStyle = "0F0";
	ctx.beginPath();
	ctx.arc(400, 300, 5*this.clicks, 0, 2*Math.PI, false);
	ctx.fill();

	ctx.fillStyle="FFF";
	ctx.textAlign="center";
	ctx.font = "normal 50pt Calibri";
	ctx.fillText("Click the circle", 400, 600);
}

FastClickLevel.prototype.click = function(x, y)
{
	var xd = x - 400;
	var yd = y - 300;

	if(xd*xd+yd*yd < 25*this.clicks*this.clicks)
	{
		this.clicks--;
	}

	if(this.clicks==0)
	{
		this.finished=true;
		this.won=true;
	}
}

FastClickLevel.prototype.keyboard = function(keycode) 
{
}

FastClickLevel.prototype.mousemove = function(x, y)
{
}

FastClickLevel.prototype.tick = function()
{
}
