function clearShadow()
{
	context.shadowBlur = 0;
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
}

function drawShadow()
{
	context.shadowColor = '#999';
	context.shadowBlur = 20;
	context.shadowOffsetX = 15;
	context.shadowOffsetY = 15;
}

function drawCircle(x, y, radius)
{
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, false);
	context.fill();
	context.stroke();
}

function drawLine(x0, y0, x1, y1)
{
	context.lineWidth = 12;
	context.lineCap = 'round';
	context.moveTo(x0,y0);
	context.lineTo(x1,y1);
	context.stroke();
	context.lineWidth = 5;
}

function drawCurveLine(x, y, radius, startAngle, endAngle, counterClockwise)
{
	context.beginPath();
	context.arc(centerX, 70, 55, 0.75 * Math.PI, 0.25 * Math.PI, true);
	context.stroke();
}

function drawCircleWithShadow(x, y, radius)
{
	drawShadow();
	drawCircle(x, y, radius);
	clearShadow();
}

function drawLineWithShadow(x0, y0, x1, y1)
{
	drawShadow();
	drawLine(x0, y0, x1, y1);
	clearShadow();
}