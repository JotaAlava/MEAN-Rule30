/**
 * Created by jalava on 3/19/2016.
 */
(function () {
    var self = {},
        rowLength,
        rule30 = [0, 1, 1, 1, 1, 0, 0, 0], // This is what the expected result would be for the application of a rule
        grid = [];

    /**
     * Will initialize the array's first row.
     * @namespace window.rule30Svc
     * @method init
     */
    self.init = function (cellsPerRow) {
        rowLength = cellsPerRow || 500;
        var newArr = new Array(rowLength);
        safeFill(newArr);
        newArr[Math.round(rowLength / 2)] = 1;

        grid.push(newArr);
    };

    /**
     * Will return the grid on its current state
     * @namespace window.rule30Svc
     * @method compute
     * @return {Array} The grid with the current state of the computations.
     */
    self.getGrid = function () {
        return grid;
    };

    /**
     * Will compute one row of 'mutation'
     * @namespace window.rule30Svc
     * @method compute
     * @param {Array} gridRow Previous row; to be used for mutation.
     * @return {Array} The new row.
     */
    self.compute = function (gridRow) {
        var nextRow = new Array(rowLength),
            rightNeighbor = 0,
            leftNeighbor = 0;

        for (var i = 0; i < rowLength; i++) {
            leftNeighbor = resolveLeftNeighbor(gridRow, i);

            // This is the cell in the row immediately above.
            var directNeighbor = gridRow[i];

            rightNeighbor = resolveRightNeighbor(gridRow, i);

            // There is few enough rules for this problem to be able to enumerate them three binary digits.
            var key = ""+leftNeighbor+directNeighbor+rightNeighbor;

            // Resolve what rule we are supposed to apply
            key = parseInt(key, 2);

            // Lookup the expected result for the given rule in lookup array
            nextRow[i] = rule30[key];
        }

        return nextRow;
    };

    /**
     * Will compute a whole grid applying Wolfram's rule 30.
     * @namespace window.rule30Svc
     * @method start
     * @return {Array} The grid completely computed.
     */
    self.start = function () {
        // TODO: Make this customizable?
        var numberOfIterations = 250;

        for(var i = 0; i < 250; i++){
            var nextRow = self.compute(grid[i]);
            grid.push(nextRow);
        }
    };

    /**
     * Will resolve the value of the left neighbor in the previous row.
     * @namespace window.rule30Svc
     * @param {Array} row The previous row.
     * @param {Number} index The index we are currently at
     * @method resolveLeftNeighbor
     */
    function resolveLeftNeighbor(row, index) {
        var result = 0;

        // When at the edge, treat as 0.
        if (index > 0) {
            result = row[index - 1];
        } else {
            result = 0;
        }

        return result;
    }

    /**
     * Will resolve the value of the right neighbor in the previous row.
     * @namespace window.rule30Svc
     * @param {Array} row The previous row.
     * @param {Number} index The index we are currently at
     * @method resolveLeftNeighbor
     */
    function resolveRightNeighbor(row, index) {
        var result = 0;

        // If it's the last cell in the row treat as 0.
        if (index < rowLength - 1) {
            result = row[index + 1];
        } else {
            result = 0;
        }
        return result;
    }

    /**
     * Thanks microsoft!
     * @namespace window.rule30Svc
     * @method safeFill
     * @return {Array} Will fill the given array with zeroes.
     */
    function safeFill(newArr) {
        if ( ![].fill)  {
            Array.prototype.fill = function( value ) {

                var O = Object( this );
                var len = parseInt( O.length, 10 );
                var start = arguments[1];
                var relativeStart = parseInt( start, 10 ) || 0;
                var k = relativeStart < 0
                  ? Math.max( len + relativeStart, 0)
                  : Math.min( relativeStart, len );
                var end = arguments[2];
                var relativeEnd = end === undefined
                  ? len
                  : ( parseInt( end)  || 0) ;
                var final = relativeEnd < 0
                  ? Math.max( len + relativeEnd, 0 )
                  : Math.min( relativeEnd, len );

                for (; k < final; k++) {
                    O[k] = value;
                }

                return O;
            };
        }

        newArr.fill(0);
    }

    window.rule30Svc = self;
})();