(function() {
    if (!("repeatt" in String.prototype)) {
        String.prototype.repeatt = function(n) {
            return (new Array(n + 1)).join(this);
        }
    }
})();