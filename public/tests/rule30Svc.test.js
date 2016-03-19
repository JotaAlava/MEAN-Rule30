/**
 * Created by jalava on 3/19/2016.
 */
describe('Array', function() {
    describe('rule 30 svc', function () {
        it('is defined as a property on the window on application start', function () {
            assert.equal(window.rule30Svc === undefined, false);
        });

        it('when grid is accessed before initialization, then it will be an empty array.', function () {
            // Arrange
            var sut = window.rule30Svc;

            // Act
            var expectedResult = sut.getGrid();

            // Assert
            assert.equal(expectedResult.length, 0);
        });

        it('when grid is accessed after initialization, then it will contain the first row of the given length', function () {
            // Arrange
            var sut = window.rule30Svc;
            sut.init(10);

            // Act
            var expectedResult = sut.getGrid();

            // Assert
            var firstRow = expectedResult[0];
            assert.equal(expectedResult.length, 1);
            assert.equal(firstRow.length, 10);
        });

        it('when grid is accessed after initialization, then a cell is made live around the middle of the first row and the other cells are made "dead".', function () {
            // Arrange
            var sut = window.rule30Svc;
            sut.init(10);

            // Act - Get the first row of the grid
            var expectedResult = sut.getGrid()[0];

            // Assert
            var numberOfZeroes = 0;
            expectedResult.forEach(function (val, key, index) {
                if (val === 0) {
                    numberOfZeroes++;
                }
            });

            assert.equal(numberOfZeroes, 9);
            assert.equal(expectedResult[5], 1);
        });

        // From this page rules will be numbered left to right. http://mathworld.wolfram.com/Rule30.html

        it('when compute is called then it will return an evolved row; rule 7.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [1,1,1];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 0);
        });

        it('when compute is called then it will return an evolved row; rule 6.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [1,1,0];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 0);
        });

        it('when compute is called then it will return an evolved row; rule 5.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [1,0,1];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 0);
        });

        it('when compute is called then it will return an evolved row; rule 4.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [1,0,0];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 1);
        });

        it('when compute is called then it will return an evolved row; rule 3.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [0,1,1];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 1);
        });

        it('when compute is called then it will return an evolved row; rule 2.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [0,1,0];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 1);
        });

        it('when compute is called then it will return an evolved row; rule 1.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [0,0,1];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 1);
        });

        it('when compute is called then it will return an evolved row; rule 0.', function () {
            // Arrange
            var sut = window.rule30Svc,
                mockPreviousRow = [0,0,0];

            sut.init(3); // must init with the same length as mock to avoid unexpected behavior

            // Act - Get the first row of the grid
            var nextRow = sut.compute(mockPreviousRow);

            // Assert
            assert.equal(nextRow[1], 0);
        });
    });
});