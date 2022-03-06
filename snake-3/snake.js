const refreshIntervalMs = 200;

let snakeEngine;

let snake = createSnake();

window.onload = () => {
    snakeEngine = createSnakeEngine(
        "snakeCanvas", 
        "foodCounter",
        20,
        refreshIntervalMs,
        30,
        getSnakeCoordinates);

    document
        .getElementById("resetBtn")
        .onclick = () => {
            if(!snakeEngine) return;
            
            snakeEngine.stop();

            snake = createSnake();

            snakeEngine = createSnakeEngine(
                "snakeCanvas", 
                "foodCounter",
                20,
                refreshIntervalMs,
                30,
                getSnakeCoordinates);
        }
}


function getSnakeCoordinates(mapSize, foodCoordinates, eatenFoodCounter) {
    if(snake.direction == "down") {
        var newY = snake.y + 1;

        if(newY >= mapSize) {
            snake.direction = "right";
        } else {
            snake.y = newY;
        }
    }

    if(snake.direction == "right") {
        var newX = snake.x + 1;

        if(newX >= mapSize) {
            snake.direction = "up";
        } else {
            snake.x = newX;
        }
    }

    if(snake.direction == "up") {
        var newY = snake.y - 1;

        if(newY < 0) {
            snake.direction = "left";
        } else {
            snake.y = newY;
        }
    }

    if(snake.direction == "left") {
        var newX = snake.x - 1;

        if(newX < 0) {
            snake.direction = "down";
        } else {
            snake.x = newX;
        }
    }

    return [{
        x: snake.x,
        y: snake.y
    }];
}

function createSnake() {
    return {
        x: 0,
        y: 0,
        direction: "down"
    };
}

function createSnakeEngine(canvasId, foodCounterId, mapSize, refreshInterval, foodCount, getSnakeCoordinates) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const xMaxPx = canvas.width;
    const yMaxPx = canvas.height;
    let foodMap = generateFoodMap(mapSize, foodCount);
    
    let eatenFoodCounter = 0;

    const interval = setInterval(() => {
        clearCanvas(ctx, xMaxPx, yMaxPx)
        prepareMap(ctx, xMaxPx, yMaxPx, mapSize);

        const snakeCoordinates = getSnakeCoordinates(
            mapSize, 
            foodMap.getFoodCoordinates(),
            eatenFoodCounter);

        eatenFoodCounter += eatFood(mapSize, snakeCoordinates, foodMap);

        drawFood(ctx, xMaxPx, yMaxPx, foodMap, mapSize);
        drawSnake(ctx, xMaxPx, yMaxPx, snakeCoordinates, mapSize);
        drawEatenFoodCounter(foodCounterId, eatenFoodCounter);
    }, refreshInterval);

    return {
        stop: () => clearInterval(interval)
    }
}

function generateFoodMap(mapSize, foodCount) {
    let foodCoordinates = [];

    for (let index = 0; index < foodCount; index++) {
        randomizeNewFood(mapSize);
    }

    function isFoodLocatedAt(coordinates) {
        return foodCoordinates
            .filter(fc=> fc.x == coordinates.x && fc.y == coordinates.y)
            .length > 0
    }

    function randomizeNewFood(mapSize) {
        var foodCount = foodCoordinates.length;
        var maxFoodCount = mapSize * mapSize;

        if(foodCount == maxFoodCount) {
            throw new Error("Cannot radomize next food becasue there is no free space on the map.")
        }

        while(true) {
            const newCoordinates = {
                x: getRandomInt(mapSize),
                y: getRandomInt(mapSize)
            };
    
            if(!isFoodLocatedAt(newCoordinates)) {
                foodCoordinates.push(newCoordinates);
                return;
            }
        }
    }

    return {
        getFoodCoordinates: () => foodCoordinates.slice(),
        isFoodLocatedAt: (coordinates) => isFoodLocatedAt(coordinates),
        deleteFoodAt: (coordinates) => {
            foodCoordinates = foodCoordinates
                .filter(fc => !(fc.x == coordinates.x && fc.y == coordinates.y))
        },
        randomizeNewFood: (mapSize) => randomizeNewFood(mapSize)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

function drawFood(ctx, xMaxPx, yMaxPx, foodMap, mapSize) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red";

    foodMap.getFoodCoordinates().forEach(coordinates => {
        const tile = getTile(coordinates, mapSize, xMaxPx, yMaxPx);
        const tileCenter = tile.getCenter();
        const radius = (tile.heightPx / 2) * 0.5;

        ctx.moveTo(tileCenter.x + radius, tileCenter.y);
        ctx.arc(tileCenter.x, tileCenter.y, radius, 0, 2 * Math.PI);
    });

    ctx.fill();
    ctx.restore();
}

function drawSnake(ctx, xMaxPx, yMaxPx, snakeCoordinates, mapSize) {
    let color = "#3370d4"


    snakeCoordinates.forEach(coordinates => {
        ctx.save();
        ctx.beginPath();

        color = lightenColor(color, 2);
        ctx.fillStyle = color;

        const tile = getTile(coordinates, mapSize, xMaxPx, yMaxPx);
        const tileCenter = tile.getCenter();
        const radius = (tile.heightPx / 2) * 0.7;

        ctx.moveTo(tileCenter.x + radius, tileCenter.y);
        ctx.arc(tileCenter.x, tileCenter.y, radius, 0, 2 * Math.PI);

        ctx.fill();
        ctx.restore();
    });
}

function lightenColor(colorCode, amount) {
    var usePound = false;
 
    if (colorCode[0] == "#") {
        colorCode = colorCode.slice(1);
        usePound = true;
    }
 
    var num = parseInt(colorCode, 16);
 
    var r = (num >> 16) + amount;
 
    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }
 
    var b = ((num >> 8) & 0x00FF) + amount;
 
    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }
 
    var g = (num & 0x0000FF) + amount;
 
    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }
 
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
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

function eatFood(mapSize, snakeCoordinates, foodMap) {
    let howManyFoodEaten = 0;

    snakeCoordinates.forEach(coordinates => {
        if(foodMap.isFoodLocatedAt(coordinates)) {
            foodMap.deleteFoodAt(coordinates);
            foodMap.randomizeNewFood(mapSize);
            howManyFoodEaten ++;
        }
    });

    return howManyFoodEaten;
}

function drawEatenFoodCounter(foodCounterId, counter) {
    document
        .getElementById(foodCounterId)
        .innerHTML = "" + counter;
}