function setup()
{
	c=document.getElementById("canvas");
	document.addEventListener("keydown", handlekey);
	c.onclick=handleClick;
	c.onmousedown= function(){return false;};
	c.onmousemove = handlemousemove;
	c.style["user-select"]="none";
	timeleft=-1;
	setInterval(tick, 33);
	currentlevel=null;

}

function startGame()
{
	timeleft=30*10;
	currentlevel=new newlevel();
}

function drawGame()
{
	var ctx=c.getContext("2d");
	
	//Clear screen
	ctx.fillStyle = "000";
	ctx.fillRect(0, 0, 800, 600);

	if(timeleft>0)
	{
		ctx.textAlign="start";
		ctx.fillStyle = "FFF";
		ctx.font="normal 100pt Calibri";
		ctx.fillText((timeleft/30).toFixed(1), 20, 120);
	}

	if(currentlevel)
	{
		currentlevel.draw(ctx);
	}
	else
	{
		ctx.fillStyle = "FFF";
		var ctx = c.getContext("2d");
		ctx.textAlign="center";
		ctx.font="normal 50pt Calibri";
		ctx.fillText("Press Enter to Begin", 400, 300);
	}
}

function handleClick(event)
{
	var x=event.pageX - c.offsetLeft,
	    y=event.pageY - c.offsetTop;

	if(currentlevel)
	{
		currentlevel.click(x, y);
	}
}

function tick()
{
	if(timeleft>0)
	{
		timeleft--;
	}
	else
	{
		currentlevel=null;
	}

	if(currentlevel)
	{
		currentlevel.tick();
		if(currentlevel.finished)
		{
			if(currentlevel.won)
			{
				timeleft+=90;
			}
			else
			{
				timeleft-=60;
			}
			currentlevel=newlevel();
		}
	}

	drawGame();
}

function handlekey(event)
{
	var k = event.keyCode;
	if(k==13)
	{
		startGame();
		return;
	}

	if(currentlevel)
	{
		currentlevel.keyboard(k);
	}
	if((k >= 37 && k <=40) || k==32)
	{
		console.log("hi");
		event.preventDefault();
	}
}

function handlemousemove(event)
{
	var x=event.pageX - c.offsetLeft,
	    y=event.pageY - c.offsetTop;

	if(currentlevel)
	{
		currentlevel.mousemove(x, y);
	}
}

function newlevel()
{
	var levels = [DoNothingLevel, BoxesLevel, FastClickLevel,ClickLevel, PatternLevel ];

	var level = levels[rand(levels.length)];

	return new level();
}

function cheat()
{
	timeleft=999999;
}
