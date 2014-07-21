require('testdom')('<html><body></body></html>')

var assert               = require('assert')
var React                = require('react')
var ReactAddons          = require('react/addons')
var ReactTestUtils       = React.addons.TestUtils
var IgnoreUnmountedMixin = require('../index')

var WithoutMixin = React.createClass({
    render : function() {
        return React.DOM.div({className:'WithoutClass'},null)
    }
})
var WithMixin = React.createClass({
    mixins : [IgnoreUnmountedMixin],
    render : function() {
        return React.DOM.div({className:'WithClass'},null)
    }
})

describe('IgnoreUnmountedMixin', function() {

    it('should fail without the mixin', function(done) {
        React.renderComponent(WithoutMixin({}), document.body, function() {
            console.log('rendered')
            assert(true)
            done()
        })
    })

    // it('should work with the mixin')

})