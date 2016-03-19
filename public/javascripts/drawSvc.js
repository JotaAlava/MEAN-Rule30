/**
 * Created by jalava on 3/19/2016.
 */
(function (window) {
    var self = {},
        context,
        color1 = 'white',
        color2 = 'black';

    /**
     * Will prepare the canvas for drawing
     * @namespace window.drawSvc
     * @method init
     */
    self.init = function () {
        var my_canvas = document.getElementById('canvas');
        context = my_canvas.getContext('2d');
    };

    /**
     * Will draw on the DOM as per the values of the given grid
     * @namespace window.drawSvc
     * @method drawGrid
     * @param {Array} grid From which we will discover what to draw
     */
    self.drawGrid = function (grid) {
        var squareDimensions = 2,
            xCoordinate = 0,
            yCoordinate = 10;

        // This algorithm is blocking; if more performance is required there is an alternate non-blocking for each available.
        grid.forEach(function (val, key, list) {
            val.forEach(function (val, key, list) {
                if(val === 1) {
                    context.fillStyle = color1;
                    context.fillRect(xCoordinate, yCoordinate, squareDimensions, squareDimensions);
                } else {
                    context.fillStyle = color2;
                    context.fillRect(xCoordinate, yCoordinate, squareDimensions, squareDimensions);
                }

                xCoordinate += squareDimensions;
            });

            yCoordinate = yCoordinate + squareDimensions;
            xCoordinate = 0;
        });
    };

    window.drawSvc = self;
})(window);