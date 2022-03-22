const refreshIntervalMs = 200;

let snakeEngine;

let snake = createSnake();

var searchClosestFood = false;

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


function getSnakeCoordinates(mapSize, foodCoordinates, closestFoodCoordinates, eatenFoodCounter) {
    
    snake.direction = getNewDirection(closestFoodCoordinates);

    if(snake.direction == "down") {
        snake.head.y = snake.head.y + 1;
    }

    if(snake.direction == "right") {
        snake.head.x = snake.head.x + 1;
    }

    if(snake.direction == "up") {
        snake.head.y = snake.head.y - 1;
    }

    if(snake.direction == "left") {
        snake.head.x = snake.head.x - 1;
    }

    return getSnakeBody(eatenFoodCounter);
}

function getSnakeBody (eatenFoodCounter) {
    snake.body.splice(eatenFoodCounter);
    snake.body.unshift({x: snake.head.x, y: snake.head.y});
    return snake.body;
}

function findClosestFood(foodCoordinates) {

    let squaredDiff = []; //tablica kwadratow odleglosci miedzy niebieska, a czerwona kulka

    for (let index = 0; index < foodCoordinates.length; index++) {
        squaredDiff[index] = (snake.head.x - foodCoordinates[index].x)**2 + (snake.head.y - foodCoordinates[index].y)**2;
    }

    let minSquaredDiff = Math.min.apply(Math, squaredDiff);
    let indexMinSquaredDiff = squaredDiff.indexOf(minSquaredDiff);
    const closestCoordinates = foodCoordinates[indexMinSquaredDiff];

    return {
        x: closestCoordinates.x,
        y: closestCoordinates.y
    }
}

function getNewDirection(closestFood) {

    if (snake.head.x < closestFood.x) {
        return "right";
    }

    if (snake.head.x > closestFood.x) {
        return "left";
    }

    if (snake.head.y > closestFood.y) {
        return "up";
    }

    if (snake.head.y < closestFood.y) {
        return "down";
    }
}

function createSnake() {
    return {
        head: {x: 0, y: 0},
        body: [],
        direction: "down",
    };
}

function createSnakeEngine(canvasId, foodCounterId, mapSize, refreshInterval, foodCount, getSnakeCoordinates) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    const xMaxPx = canvas.width;
    const yMaxPx = canvas.height;
    let foodMap = generateFoodMap(mapSize, foodCount);
    
    let eatenFoodCounter = 0;
    let closestFoodCoordinates = findClosestFood(foodMap.getFoodCoordinates());

    const interval = setInterval(() => {
        clearCanvas(ctx, xMaxPx, yMaxPx)
        prepareMap(ctx, xMaxPx, yMaxPx, mapSize);

        const snakeCoordinates = getSnakeCoordinates(
            mapSize, 
            foodMap.getFoodCoordinates(),
            closestFoodCoordinates,
            eatenFoodCounter);

        eatenFoodCounter += eatFood(mapSize, snakeCoordinates, foodMap);

        if (searchClosestFood) {
            closestFoodCoordinates = findClosestFood(foodMap.getFoodCoordinates());
            searchClosestFood = false;
        }

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
        throw `X coordinate (${coordinates.x}) is outside of the map (${mapSize} x ${mapSize})`;
    }

    if(coordinates.y >= mapSize || coordinates.y < 0) {
        throw `Y coordinate (${coordinates.y}) is outside of the map (${mapSize} x ${mapSize})`;
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
            searchClosestFood = true;
        }
    });

    return howManyFoodEaten;
}

function drawEatenFoodCounter(foodCounterId, counter) {
    document
        .getElementById(foodCounterId)
        .innerHTML = "" + counter;
}