
window.onload = () => createSnakeEngine(
    "snakeCanvas", 
    20,
    200,
    getNextFrame);


var ball = {
    x: 0,
    y: 0,
    direction: "down"
}

function getNextFrame(mapSize, frameIndex) {
    if(ball.direction == "down") {
        var newY = ball.y + 1;

        if(newY >= mapSize) {
            ball.y = 0;
        } else {
            ball.y = newY;
        }
    }

    if(ball.direction == "right") {
        var newX = ball.x + 1;

        if(newX >= mapSize) {
            ball.direction = "up";
        } else {
            ball.x = newX;
        }
    }

    if(ball.direction == "up") {
        var newY = ball.y - 1;

        if(newY < 0) {
            ball.direction = "left";
        } else {
            ball.y = newY;
        }
    }

    if(ball.direction == "left") {
        var newX = ball.x - 1;

        if(newX < 0) {
            ball.direction = "down";
        } else {
            ball.x = newX;
        }
    }

    return [{
        x: ball.x,
        y: ball.y
    }];
}

function createSnakeEngine(canvasId, mapSize, refreshInterval, getNextFrame) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const xMaxPx = canvas.width;
    const yMaxPx = canvas.height;
    
    let index = 0;

    setInterval(() => {
        clearCanvas(ctx, xMaxPx, yMaxPx)
        prepareMap(ctx, xMaxPx, yMaxPx, mapSize);

        const frame = getNextFrame(mapSize, index);
        drawFrame(ctx, xMaxPx, yMaxPx, frame, mapSize);

        index ++;
    }, refreshInterval);
}

function clearCanvas(ctx, xMaxPx, yMaxPx){
    ctx.clearRect(0, 0, xMaxPx, yMaxPx);
}

function prepareMap(ctx, xMaxPx, yMaxPx, mapSize) {    
    drawBorder(ctx, xMaxPx, yMaxPx);
    drawGrid(ctx, xMaxPx, yMaxPx, mapSize);
}

function drawBorder(ctx, xMaxPx, yMaxPx) {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(xMaxPx, 0);
    ctx.lineTo(xMaxPx, yMaxPx);
    ctx.lineTo(0, yMaxPx);
    ctx.lineTo(0, 0);
    ctx.stroke();
}

function drawGrid(ctx, xMaxPx, yMaxPx, mapSize) {
    var xDiffPx = xMaxPx/mapSize;
    var yDiffPx = yMaxPx/mapSize;

    ctx.lineWidth = 1;
    ctx.moveTo(0,0);

    for (let column = 1; column < mapSize; column++) {
        var xPx = column * xDiffPx;
        ctx.moveTo(xPx, 0);
        ctx.lineTo(xPx, yMaxPx);
        ctx.stroke();
    }

    for (let row = 1; row < mapSize; row++) {
        var yPx = row * yDiffPx;
        ctx.moveTo(0, yPx);
        ctx.lineTo(xMaxPx, yPx);
        ctx.stroke();
    }
}

function drawFrame(ctx, xMaxPx, yMaxPx, frame, mapSize) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#3370d4";

    frame.forEach(coordinates => {
        const tile = getTile(coordinates, mapSize, xMaxPx, yMaxPx);
        const tileCenter = tile.getCenter();
        const radius = (tile.heightPx / 2) * 0.7;

        ctx.moveTo(tileCenter.x + radius, tileCenter.y);
        ctx.arc(tileCenter.x, tileCenter.y, radius, 0, 2 * Math.PI);
    });

    ctx.fill();
    ctx.restore();
}

function getTile(coordinates, mapSize, xMaxPx, yMaxPx) {
    if(coordinates.x >= mapSize || coordinates.x < 0) {
        throw `X cooridnate (${coordinates.x}) is outside of the map (${mapSize} x ${mapSize})`;
    }

    if(coordinates.y >= mapSize || coordinates.y < 0) {
        throw `Y cooridnate (${coordinates.y}) is outside of the map (${mapSize} x ${mapSize})`;
    }

    const tileWidthPx = xMaxPx/mapSize;
    const tileHeightPx = yMaxPx/mapSize;

    return {
        x: coordinates.x,
        y: coordinates.y,
        widthPx: tileWidthPx,
        heightPx: tileHeightPx,

        getCenter: () => {
            const x0 = coordinates.x * tileWidthPx;
            const x1 = (coordinates.x+1) * tileWidthPx;
            const xCenter = x0 + (x1 - x0)/2;

            const y0 = coordinates.y * tileHeightPx;
            const y1 = (coordinates.y + 1) * tileHeightPx;
            const yCenter = y0 + (y1 - y0)/2;

            return {
                x: xCenter,
                y: yCenter
            };
        }
    }
}