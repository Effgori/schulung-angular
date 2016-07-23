"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Niceguy' },
            { id: 12, name: 'Narco Terror' },
            { id: 13, name: 'Mr. Bombastic' },
            { id: 14, name: 'Cellulitis' },
            { id: 15, name: 'Not Magneto' },
            { id: 16, name: 'RubberDuck' },
            { id: 17, name: 'Dynamo' },
            { id: 18, name: 'Dr. Eye Kuh' },
            { id: 19, name: 'Magmama' },
            { id: 20, name: 'Turn-a-do' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map