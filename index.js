module.exports = {
    componentWillMount : function() {
        this._replaceState = this.replaceState
        this.replaceState = function(completeState, callback) {
            if (!this.isMounted()) return
            this._replaceState(completeState, callback)
        }
    }
}