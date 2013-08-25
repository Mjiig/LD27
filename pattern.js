function PatternLevel(difficulty)
{
	this.finished=false;
	this.won=false;
	this.pattern=[];
	var target=3+rand(difficulty/3);

	for(var i=0; i<target; i++)
	{
		this.pattern.push(rand(4));
	}
}

PatternLevel.prototype.draw = function(ctx)
{
	//Draw buttons
	ctx.fillStyle="#0F0";
	ctx.fillRect(50, 250, 100, 100);
	ctx.beginPath();
	ctx.arc(300, 300, 50, 0, 2*Math.PI, false);
	ctx.fill();

	ctx.fillStyle="#00F";
	ctx.fillRect(450, 250, 100, 100);
	ctx.beginPath();
	ctx.arc(700, 300, 50, 0, 2*Math.PI, false);
	ctx.fill();

	for(var i=0; i<this.pattern.length; i++)
	{
		if(this.pattern[i]<2)
		{
			ctx.fillStyle="#0F0";
		}
		else
		{
			ctx.fillStyle="#00F";
		}
		
		if(this.pattern[i]%2==0)
		{
			ctx.fillRect(52*i, 550, 50, 50);
		}
		else
		{
			ctx.beginPath();
			ctx.arc(52*i+25, 575, 25,  0, 2*Math.PI, false);
			ctx.fill();
		}
	}

	ctx.fillStyle="#FFF";
	ctx.font="normal 25px Calibri";
	ctx.TextAlign="start";
	ctx.fillText("Press the buttons in this pattern:", 0, 550);
}


PatternLevel.prototype.click = function(x, y)
{
	if(y<250 || y>350)
		return;

	var clicked=Math.floor(x/200);

	if(this.pattern[0] == clicked)
	{
		this.pattern.shift();
	}
	else
	{
		this.pattern.push(rand(4));
	}

	if(this.pattern.length==0)
	{
		this.finished=true;
		this.won=true;
	}
}

PatternLevel.prototype.keyboard = function(keycode) 
{
}

PatternLevel.prototype.mousemove = function(x, y)
{
}

PatternLevel.prototype.tick = function()
{
}
